import React from 'react'
import './button.css'

export const Button =  ({
    Tag = "div",
    children,
    onClick
}) => {


  return(
   <Tag
    className={"button"}
    onClick={onClick}
   >
     {children}
   </Tag>
  )
}
