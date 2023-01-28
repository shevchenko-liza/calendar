import React from "react"

export const GlContext = React.createContext({
    month: 0,
    setMonth: (index) => { },
    showEventModal: false,
    setShowEventModal: () => { },
    dayMain: null,
    setDay: (day) => { },
    smallCalendar: 0,
    setSmallCalendar: (index) => { },
    dispatchEvent: ({ type, payload }) => { },
    saveEvent: [],
    selectedEvent: null,
    setSelectedEvent: () => { },
})

