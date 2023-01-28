import React from 'react';
import { useContext } from 'react';

import { GlContext } from '../../Global/Context';

import classes from './styles.module.scss'

export const Button = () => {
    const { setShowEventModal } = useContext(GlContext)
    return (
        <div className={classes.top}>
            <button className={classes.btn} onClick={() => setShowEventModal(true)}>Create</button>
        </div>
    );
}


