import React from 'react';
import classes from './styles.module.scss'
import dayjs from 'dayjs';
import clsx from 'clsx'
import icon1 from './photo/calen.jpg'

export const Day = ({ day, nameWeek }) => {
    const getCurrentDayClass = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? <img className={classes.today} src={icon1} /> : ""
    return (
        <>
            <div className={classes.borderTitle}>
                <div className={classes.col}>
                    {nameWeek === 0 && (
                        <div className={classes.date}>{day.format("dddd").toUpperCase()}</div>)}
                </div>
                <div className={clsx(classes.formDate)}>{day.format("D")}</div>
                <div className={classes.today}>{getCurrentDayClass}</div>
            </div>
        </>
    );
}


