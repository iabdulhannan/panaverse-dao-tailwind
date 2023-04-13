'use client'
import {useState, useEffect} from 'react'
import {isNumber} from "util";
import {number} from "prop-types";

export const useBreakpoint = (lowerBound: number, upperBound: number | 'any') => {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)
  const resize = () => {
    setBreakpoint(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])


  if (typeof upperBound === 'number') {
    if (breakpoint >= lowerBound && breakpoint < upperBound) {
      return true
    } else return false
  } else if (upperBound === 'any') {
    return breakpoint >= lowerBound
  }

}
