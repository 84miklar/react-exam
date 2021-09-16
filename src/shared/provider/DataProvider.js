import React, { useState, createContext } from "react"

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [serverData, setServerData] = useState()

  return (
    <div>
      <DataContext.Provider value={[serverData, setServerData]}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
