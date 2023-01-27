import React from 'react';
import { GlContext } from './Context';
import { useState } from 'react';
import dayjs from 'dayjs';


export const ContextWrapper = (props) => {
    const [month, setMonth] = useState(dayjs().month());
    const [showEventModal, setShowEventModal] = useState(false);
    return (
        <GlContext.Provider value={{ month, setMonth,showEventModal,setShowEventModal}}>
            {props.children}
        </GlContext.Provider>
    );
}

