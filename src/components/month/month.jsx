import React from 'react';

import { Day } from '../day/index'

import classes from './styles.module.scss'

export const Month = ({ month }) => {
    return (
        <div className={classes.block}>
            {month.map((row, index) => (
                <div key={index.id} className={classes.column}>
                    {row.map((day, item) => (
                        <Day day={day} key={item.id} nameWeek={index} />
                    ))}
                </div>
            ))}
        </div>
    );
}

