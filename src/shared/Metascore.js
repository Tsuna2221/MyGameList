import React from 'react';

const Metascore = ({score}) => {
    const metaColor = score < 76 ? score < 51 ? "#ff0000" : "#ffcc33" : "#66cc33";

    return <div style={{backgroundColor: metaColor}} className='metascore font-roboto d-flex a-center c-white w-bold s-26'>{score}</div>
}


export default Metascore;