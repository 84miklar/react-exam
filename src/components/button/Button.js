import React from "react"
import "./Button.css"

export const Button = (props) => {
  return (
    <div>
      <button className="btn">{props.label}</button>
    </div>
  )
}
