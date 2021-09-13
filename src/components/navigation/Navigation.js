import React, { useEffect } from "react"
import { NavigationDesktop } from "./navigationDesktop/NavigationDesktop"
import { NavigationMobile } from "./navigationMobile/NavigationMobile"

export const Navigation = () => {
  useEffect(() => {
    console.log(window.innerWidth)
  })

  const setNavigation = () => {
    if (window.innerWidth > 950) return <NavigationDesktop />
    else return <NavigationMobile />
  }

  return (
    <React.Fragment>
      <NavigationDesktop />
    </React.Fragment>
  )
}
