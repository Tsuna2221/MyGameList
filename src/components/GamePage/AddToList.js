import React from 'react';

import { FullButton } from '../../shared/Buttons'

const options = {
    status: ["Completed", "Playing", "Dropped", "On Hold", "On Wishlist"],
    score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    started: ["Completed", "Playing", "Dropped", "On Hold", "On Wishlist"],
    finished: ["Completed", "Playing", "Dropped", "On Hold", "On Wishlist"]
}

const SelectItem = ({label, name, className}) => {
    return (
        <div className={`select-container ${className}`}>
            <label className="s-14 w-regular c-shade" htmlFor={name}>{label}</label><br/>
            <select className="mar-t-6" name={name} id={name}>
                <option value={null}>----</option>
                {
                    options[name].map(item => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

const AddToList = ({}) => (
    <div className='add-to-list'>
        <div className="container">
            <h2 className="s-26 w-bold c-light">Add to List</h2>
            <form className="form cw-100 d-flex a-between">
                <div className="mar-t-24">
                    <SelectItem name="status" label="Status"/>
                    <SelectItem className="mar-t-18" name="started" label="Started at"/>
                </div>
                <div className="mar-t-24">
                    <SelectItem name="score" label="Your Score"/>
                    <SelectItem className="mar-t-18" name="finished" label="Finished at"/>
                </div>
            </form>
        </div>
        <FullButton containerStyle={{marginTop: 30}} items={[{label: "Save game to your List", func: () => null}]}/>
    </div>
)

export default AddToList;