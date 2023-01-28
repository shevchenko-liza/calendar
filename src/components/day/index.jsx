import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import classes from './styles.module.scss'
import clsx from 'clsx'

import dayjs from 'dayjs';

import icon1 from './photo/calen.jpg';

import { GlContext } from '../../Global/Context';


export const Day = ({ day, nameWeek }) => {
    const [dayEvent, setDayEvent] = useState([]);
    const getCurrentDayClass = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? <img className={classes.today} src={icon1} /> : "";
    const { setShowEventModal, setDay, saveEvent, setSelectedEvent } = useContext(GlContext)
    // const [currentMonthIndex, setCurrentMonth] = useState(
    //     dayjs().month()
    // );
    useEffect(() => {
        const events = saveEvent.filter(
            (item) =>
                dayjs(item.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );

        setDayEvent(events);
    }, [saveEvent, day]);
    return (
        <>
            <div className={classes.borderTitle}>
                <div className={classes.col}>
                    {nameWeek === 0 && (
                        <div className={classes.date}>{day.format("dddd").toUpperCase()}</div>)}
                </div>
                <div className={clsx(classes.formDate)}>{day.format("D")}</div>
                <div className={classes.today}>{getCurrentDayClass}</div>
                <div className={classes.field} onClick={() => { setDay(day); setShowEventModal(true); }}>{dayEvent.map((item) => (
                    <div
                        key={item.id} className={classes.nameMain} onClick={() => setSelectedEvent(item)}>{item.name}</div>
                ))}</div>
            </div>
        </>
    );
}


