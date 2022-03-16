import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    All,
    Checked,
    Todo
} from '../constants';

const radioCheck = [
    { name: All },
    { name: Checked },
    { name: Todo },
]

function Filter() {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(All);

    const handleCheck = (item) => {
        setChecked(item)
        dispatch({
            type: item,
        })
    }

    return (
        <div className="filter_container">
            {
                radioCheck.map((item, i) => {
                    return (
                        <div key={item.name} className="form_gr">
                            <label htmlFor={i}>{item.name}</label>
                            <input type="radio"
                                id={i}
                                checked={checked === item.name}
                                onChange={() => handleCheck(item.name)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Filter