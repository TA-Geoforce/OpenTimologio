/* eslint-disable react-hooks/exhaustive-deps*/
import React from "react"
import { useState, useEffect } from 'react';
import Home from "./Home.js"
import Info from "./Info.js"
import Version from "./Version.js"
import User from "./User.js"
import Books from "./Books.js"
import Desktop from "./Desktop.js"

function App() {

  const [openMenu, setOpenMenu] = useState("");
  const [openContent, setOpenContent] = useState("");
  const [windowSize, setWindowSize] = useState(900);
  const [home, setHome] = useState(true);
  const [version, setVersion] = useState(false);
  const [info, setInfo] = useState(false);
  const [phoneMode, setPhoneMode] = useState(false);
  const [user, setUser] = useState(false);
  const [books, setBooks] = useState(false);
  const [positionButtons, setPositionButtons] = useState("languageButtons")
  const [displayLanguages, setDisplayLanguages] = useState("dontDisplayLanguages")
  
  useEffect(() => {
    const handleResize = () => {
      if(windowSize <= 1023 && openContent === "is-active" && openMenu === "is-active")
      {
        setOpenMenu("is-active");
      }
      else
      {
        setPositionButtons("languageButtons");
        setOpenMenu("");
        setOpenContent("");
        setPhoneMode(false);
        setDisplayLanguages("dontDisplayLanguages");
      }
    }
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const toggleLanguages = () => {
    
    if( displayLanguages === "displayLanguages")
    {
      setDisplayLanguages("dontDisplayLanguages");
    }

    if( displayLanguages === "dontDisplayLanguages")
    {
      setDisplayLanguages("displayLanguages");
    }
  }
  const toggleMenuNavbar = () => {
    setPhoneMode(true);
    if (openContent === "")
    {
      setOpenContent("is-active");
      setOpenMenu("is-active");
      setPositionButtons("languageButtonsPhone");
    }
    else
    {
      setOpenContent("");
      setOpenMenu("");
      setPositionButtons("languageButtons");
    }
  }

  const changeToVersion = (e) => {
    e.preventDefault();
    setVersion(true);
    setHome(false);
    setInfo(false);
    setUser(false);
    setBooks(false);
    if(phoneMode === true)
    {
      toggleMenuNavbar();
    }
  }

  const changeToInfo = (e) => {
    e.preventDefault();
    setVersion(false);
    setHome(false);
    setUser(false);
    setBooks(false);
    setInfo(true);
    if(phoneMode === true)
    {
      toggleMenuNavbar();
    }
  }

  const changeToHome = (e) => {
    e.preventDefault();
    setVersion(false);
    setHome(true);
    setInfo(false);
    setUser(false);
    setBooks(false);
    if(phoneMode === true)
    {
      toggleMenuNavbar();
    }
  }

  const changeToUserAccount = (e) => {
    e.preventDefault();
    setVersion(false);
    setHome(false);
    setInfo(false);
    setUser(true);
    setBooks(false);
    if(phoneMode === true && openContent === "is-active")
    {
      toggleMenuNavbar();
    }
  }

  const changeToUserBooks = (e) => {
    e.preventDefault();
    setVersion(false);
    setHome(false);
    setInfo(false);
    setUser(false);
    setBooks(true);
    if(phoneMode === true && openContent === "is-active")
    {
      toggleMenuNavbar();
    }
  }

  return (
    <>
      <div className="container is-fluid">
          <header className="navbar position-color">
                <div className="onHover">
            </div>
                  <div onClick = {() => toggleMenuNavbar()} className={"navbar-burger " + openMenu} aria-label="menu" aria-hidden="true">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </div>
                <div className={"navbar-menu color " + openContent}>
                    <Desktop changeToHome = {changeToHome} changeToVersion = {changeToVersion} changeToInfo = {changeToInfo} toggleLanguages = {toggleLanguages} displayLanguages = {displayLanguages} positionButtons = {positionButtons} openContent = {openContent}/>
                </div>
                <div className = "navbar leftSide"> 
                  <button className="fa fa-address-book buttonUser" onClick={changeToUserAccount} title="User Account"></button>
                  <button className="fa fa-book buttonUser" onClick={changeToUserBooks} title="User Books"></button>
                </div>
            </header>
            </div>
      {home === true && <Home/>}
      {version === true && <Version/>}
      {info === true && <Info/>}
      {user === true && <User/>}
      {books === true && <Books/>}
    </>
  );
}

export default App;