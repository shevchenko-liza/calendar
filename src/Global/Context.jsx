import React from "react"

export const GlContext = React.createContext({
    month: 0,
    setMonth: (index) => {},
    showEventModal: false,
  setShowEventModal: () => {},
})

