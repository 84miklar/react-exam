import React from "react"
import { useLocation } from "react-router"
import "./FourOFour.css"
import { Card } from "../../components/cards/Card"

export const FourOFour = () => {
  let location = useLocation()

  return (
    <div className="four_O_four">
      <Card>
        <h1>Oops...</h1>
        <h1>404 - page not found</h1>
        <h3>No match for {location.pathname}</h3>
      </Card>
    </div>
  )
}
