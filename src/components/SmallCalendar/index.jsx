import React from 'react';

import classes from './styles.module.scss'

import icon from './photo/smCalendar.jpg'
import icon1 from './photo/calen.jpg'

import dayjs from 'dayjs';

import { useState } from 'react';
import { useEffect } from 'react';

import { GetMonth } from '../log';;

export const SmallCalendar = () => {
    const [open, setOpen] = useState(false)
    const [currentMonthIndex, setCurrentMonth] = useState(
        dayjs().month()
    );

    function handlePrevMonth() {
        setCurrentMonth(currentMonthIndex - 1);
    }
    function handleNextMonth() {
        setCurrentMonth(currentMonthIndex + 1);
    }

    const [current, setCurrent] = useState(GetMonth());
    useEffect(() => {
        setCurrent(GetMonth(currentMonthIndex));
    }, [currentMonthIndex])

    // const getCurrentDayClass=({day}) =>{
    // return(
    // day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? <img className={classes.today} src={icon1} /> : ""
    // )}
    return (
        <div className={classes.box}>
            <button onClick={() => setOpen(true)} className={classes.buttonMain}>
                <img src={icon} alt="icon" className={classes.icon} />
            </button>
            {open && (
                <div className={classes.block}>
                    <div className={classes.boxDate}>
                        <div className={classes.box}>
                            <div className={classes.gap}>
                                <button onClick={handlePrevMonth} className={classes.left}>
                                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5001 11C25.5001 11.4144 25.3355 11.8119 25.0425 12.1049C24.7494 12.3979 24.352 12.5625 23.9376 12.5625H5.83448L12.5439 19.2688C12.6891 19.414 12.8044 19.5865 12.883 19.7763C12.9616 19.9661 13.0021 20.1696 13.0021 20.375C13.0021 20.5805 12.9616 20.7839 12.883 20.9737C12.8044 21.1635 12.6891 21.336 12.5439 21.4813C12.3986 21.6265 12.2261 21.7418 12.0363 21.8204C11.8465 21.899 11.6431 21.9395 11.4376 21.9395C11.2322 21.9395 11.0287 21.899 10.8389 21.8204C10.6491 21.7418 10.4766 21.6265 10.3314 21.4813L0.956357 12.1063C0.810847 11.9611 0.6954 11.7887 0.61663 11.5989C0.53786 11.409 0.497314 11.2055 0.497314 11C0.497314 10.7945 0.53786 10.591 0.61663 10.4012C0.6954 10.2113 0.810847 10.0389 0.956357 9.89377L10.3314 0.518771C10.6248 0.225375 11.0227 0.0605469 11.4376 0.0605469C11.8525 0.0605469 12.2505 0.225375 12.5439 0.518771C12.8373 0.812167 13.0021 1.2101 13.0021 1.62502C13.0021 2.03995 12.8373 2.43788 12.5439 2.73127L5.83448 9.43752H23.9376C24.352 9.43752 24.7494 9.60214 25.0425 9.89517C25.3355 10.1882 25.5001 10.5856 25.5001 11Z" fill="black" />
                                    </svg>
                                </button>
                                <div className={classes.month}>
                                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
                                        "MMMM YYYY"
                                    )}
                                </div>
                                <button onClick={handleNextMonth} className={classes.right}><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000137329 10.9394C0.000137329 10.525 0.164757 10.1276 0.457781 9.83458C0.750807 9.54155 1.14824 9.37693 1.56264 9.37693H19.6658L12.9564 2.67068C12.8111 2.52541 12.6959 2.35294 12.6173 2.16313C12.5386 1.97332 12.4982 1.76988 12.4982 1.56443C12.4982 1.35898 12.5386 1.15555 12.6173 0.965734C12.6959 0.775925 12.8111 0.603458 12.9564 0.458183C13.1017 0.312908 13.2741 0.19767 13.4639 0.119047C13.6537 0.0404263 13.8572 -4.00543e-05 14.0626 -4.00543e-05C14.2681 -4.00543e-05 14.4715 0.0404263 14.6613 0.119047C14.8511 0.19767 15.0236 0.312908 15.1689 0.458183L24.5439 9.83318C24.6894 9.97832 24.8048 10.1508 24.8836 10.3406C24.9624 10.5304 25.0029 10.7339 25.0029 10.9394C25.0029 11.145 24.9624 11.3485 24.8836 11.5383C24.8048 11.7281 24.6894 11.9005 24.5439 12.0457L15.1689 21.4207C14.8755 21.7141 14.4776 21.8789 14.0626 21.8789C13.6477 21.8789 13.2498 21.7141 12.9564 21.4207C12.663 21.1273 12.4982 20.7294 12.4982 20.3144C12.4982 19.8995 12.663 19.5016 12.9564 19.2082L19.6658 12.5019H1.56264C1.14824 12.5019 0.750807 12.3373 0.457781 12.0443C0.164757 11.7513 0.000137329 11.3538 0.000137329 10.9394Z" fill="black" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <button className={classes.button} onClick={() => setOpen(false)}>X</button>
                    </div>
                    <div className={classes.mainWeek}>
                        {current[0].map((week, item) => (
                            <div key={item.id} className={classes.weeks}>
                                {week.format("ddd").charAt(0)}
                            </div>
                        ))}
                    </div>
                    {current.map((idx, index) => (
                        <div className={classes.title}
                            key={index}>
                            {idx.map((day, item) => (
                                <button key={item.id} className={classes.border} >
                                    <div className={classes.dayCalendar}>{day.format("D")}</div>
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



