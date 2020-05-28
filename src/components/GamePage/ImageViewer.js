import React, { Component } from 'react';

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}

class ImageViewer extends Component {
    constructor(props){
        super(props);

        this.sliderTimer = new Timer(this.setMedia, 5000)
    }

    render() {
        const { state: { currentMedia, previousMedia, imageIndex }, props: { screenshots } } = this;

        return (
            <div className='image-viewer'>
                <div className="big-picture-container pos-relative">
                    <img className="big-picture cw-100 pos-absolute" src={previousMedia} alt=""/>
                    { currentMedia ? <img className="big-picture cw-100 z-index-100" src={currentMedia} alt=""/> : null }
                </div>
                <div className="viewer-list d-flex pad-t-10 pad-b-6">
                    {screenshots.map(({image, id}, index) => (
                        <div className="preview-container pos-relative" key={id}>
                            { imageIndex === index ? <div className="overlay-shadow cw-100 ch-100 pos-absolute"/> : null }
                            <img className="clickable cw-inherit" onClick={() => this.setMedia(index, true)} src={image} id={id} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    state = {
        currentMedia: this.props.screenshots[0].image,
        previousMedia: null,
        imageIndex: 0
    }

    setMedia = (index, clicked) => {
        const { state: { imageIndex }, props: { screenshots } } = this;
        const newIndex = imageIndex === screenshots.length - 1 ? 0 : imageIndex + 1

        this.setState({...this.setState, previousMedia: this.state.currentMedia, currentMedia: null})
        
        if(clicked) this.sliderTimer.reset(5000);
        return setTimeout(() => this.setState({
            ...this.setState,
            currentMedia: screenshots[clicked ? index : newIndex].image,
            imageIndex: clicked ? index : newIndex
        }), 1);
    }
}

export default ImageViewer;