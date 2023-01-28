import React, { useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { GlContext } from './Context';

import dayjs from 'dayjs';

export const ContextWrapper = (props) => {
    const [month, setMonth] = useState(dayjs().month());
    const [showEventModal, setShowEventModal] = useState(false);
    const [dayMain, setDay] = useState(dayjs());
    const [smallCalendar, setSmallCalendar] = useState(null);
    const [saveEvent, dispatchEvent] = useReducer(eventsReducer, [], stEvent)
    const [selectedEvent, setSelectedEvent] = useState(null);

    function eventsReducer(state, { type, payload }) {
        switch (type) {
            case "push":
                return [...state, payload];
            case "update":
                return state.map((event) =>
                    event.id === payload.id ? payload : event
                );
            case "delete":
                return state.filter((event) => event.id !== payload.id);
            default:
                throw new Error();
        }
    }
    function stEvent() {
        const storageEvents = localStorage.getItem("saveEvent");
        const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
        return parsedEvents;
    }

    useEffect(() => {
        if (smallCalendar !== null) {
            setMonth(smallCalendar);
        }
    }, [smallCalendar]);
    useEffect(() => {
        localStorage.setItem("saveEvent", JSON.stringify(saveEvent));
    }, [saveEvent]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);

    return (
        <GlContext.Provider value={{ setSelectedEvent, selectedEvent, month, setMonth, showEventModal, setShowEventModal, dayMain, setDay, smallCalendar, setSmallCalendar, dispatchEvent, saveEvent }}>
            {props.children}
        </GlContext.Provider>
    );
}

