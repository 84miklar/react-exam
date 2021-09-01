import React from "react"
import { useLocation } from "react-router"

export const FourOFour = () => {
  let location = useLocation()

  return (
    <div>
      <h2>404 - page not found</h2>
      <span>No match for {location.pathname}</span>
    </div>
  )
}
