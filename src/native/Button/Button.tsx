import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes, AriaAttributes } from "react";

import './Button.module.css'
// import classes from './Button.module.css'
import '../../index.css'

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  AriaAttributes{
    children?: React.ReactNode
  }

export const Button:FC<IButton> = ({ children, ...props }) => {

  // const rootClasses = [classes.button]
  const rootClasses = ['button']

  if (props.className) {
    rootClasses.push(props.className)
  }

  return (
    <button {...props} className={rootClasses.join(' ')}>{ children }</button>
  )
}