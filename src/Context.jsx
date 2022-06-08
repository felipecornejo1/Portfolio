// This component stores all states to make them accessible by every other component
// To access a state variable, the component must import the 'State' function from this component
import React, { createContext, useContext, useState } from 'react'

const Data = createContext()

export default function Context({ children }) {
  // States
  const [notifications, setNotifications] = useState({
    formNotFilled: false,
    emailSent: false,
    emailError: false,
  })

  return (
    <Data.Provider value={{ notifications, setNotifications }}>
      {children}
    </Data.Provider>
  )
}

export const State = () => {
  return useContext(Data)
}
