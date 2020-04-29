import React from 'react'
import './button.css'

export const Button =  ({
    Tag = "div",
    children

}) => {


  return(
   <Tag
    className={"button"}
   >
     {children}
   </Tag>
  )
}
