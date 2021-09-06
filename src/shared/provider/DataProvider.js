import React, { useState, createContext } from "react"

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()

  return (
    <div>
      <DataContext.Provider value={[data, setData]}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
