import React, { useState } from 'react';
import "./nav.css";
import {AiOutlineHome, AiOutlineUser, AiOutlineDatabase, AiOutlinePhone} from "react-icons/ai"

function Nav() {
  const [active, setActive] = useState("#home")

  return (
    <nav>
      <a 
      href="#home" 
      className={active === "#home" && "active"}
      onClick={() => {setActive("#home")}}><AiOutlineHome/></a>
      <a 
      href="#about" 
      className={active === "#about" && "active"} 
      onClick={() => {setActive("#about")}}><AiOutlineUser/></a>
      <a 
      href="#portfolio" 
      className={active === "#portfolio" && "active"}
      onClick={() => {setActive("#portfolio")}}><AiOutlineDatabase/></a>
      <a 
      href="#contact" 
      className={active === "#contact" && "active"}
      onClick={() => {setActive("#contact")}}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav