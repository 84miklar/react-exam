import React, { useState, createContext } from "react"

export const MovieDataContext = createContext(null)

export const MovieDataProvider = ({ children }) => {
  const [oneMovieData, setOneMovieData] = useState()
  return (
    <div>
      <MovieDataContext.Provider value={[oneMovieData, setOneMovieData]}>
        {children}
      </MovieDataContext.Provider>
    </div>
  )
}
