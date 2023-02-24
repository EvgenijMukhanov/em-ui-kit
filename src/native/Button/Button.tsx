import React, { FC } from "react";

import './Button.css'
import '../../index.css'

export interface IButton {
  children?: React.ReactNode
}

export const Button:FC<IButton> = ({ children, ...props }) => {

  const rootClasses = ['button']

  return (
    <button {...props} className={rootClasses.join(' ')}>{ children }</button>
  )
}