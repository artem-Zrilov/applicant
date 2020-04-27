import './index.css';
import React from "react";
import Profile from "./Profile";
import BurgerMenu from "./BurgerMenu"


export default class Header extends React.Component{
  render() {
    return(
     <header className="header">
      <Profile/>
      <BurgerMenu/>
     </header>
    )
  }
}