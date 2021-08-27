import React from 'react';
import classes from './BottomHeader.module.css';
import { FiMenu } from 'react-icons/fi';
import { BOTTOM_DATA } from '../../../data/BOTTOM_DATA';

function BottomHeader() {
    
    return (
        <div className={classes.bottomheader}>
            <ul className={classes.bottomheader__collection}>
                <li className={classes.bottomheader__item}><p><FiMenu/>All</p> </li>
                {
                    BOTTOM_DATA?.map(bottomItem => (
                       <li className={classes.bottomheader__item}><p>{bottomItem?.bottomName}</p></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BottomHeader
