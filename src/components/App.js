/* eslint-disable react-hooks/exhaustive-deps*/
import React from "react"
import { useState, useEffect } from 'react';
import Home from "./Home.js"
import Info from "./Info.js"
import Version from "./Version.js"

function App() {

  const [openMenu, setOpenMenu] = useState("");
  const [openContent, setOpenContent] = useState("");
  const [windowSize, setWindowSize] = useState(900);
  const [home, setHome] = useState(true);
  const [version, setVersion] = useState(false);
  const [info, setInfo] = useState(false);
  const [phoneMode, setPhoneMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(windowSize <= 1023 && openContent === "is-active" && openMenu === "is-active")
      {
        setOpenMenu("is-active");
      }
      else
      {
        setOpenMenu("");
        setOpenContent("");
        setPhoneMode(false);
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

  const toggleMenuNavbar = () => {
    setPhoneMode(true);
    if (openContent === "")
    {
      setOpenContent("is-active");
      setOpenMenu("is-active");
    }
    else
    {
      setOpenContent("");
      setOpenMenu("");

    }
  }

  const changeToVersion = (e) => {
    e.preventDefault();
    setVersion(true);
    setHome(false);
    setInfo(false);
    if(phoneMode === true)
    {
      toggleMenuNavbar();
    }
  }

  const changeToInfo = (e) => {
    e.preventDefault();
    setVersion(false);
    setHome(false);
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
    if(phoneMode === true)
    {
      toggleMenuNavbar();
    }
  }

  return (
    <>
      <div className="container is-fluid">
          <header className="navbar position-color">
                <div className="onHover">
                <div className="header-logo">
            </div>
                  <div onClick = {() => toggleMenuNavbar()} className={"navbar-burger " + openMenu} aria-label="menu" aria-hidden="true">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </div>
                </div>
                <div className={"navbar-menu color " + openContent}>
                  {openContent===""
                  ? <div className="navbar-end">
                      <div className="position-text">
                      <h4>
                      <button className="positionHomeButton" onClick={changeToHome}>Home</button>
                      <button onClick={changeToVersion}>
                      Version
                      </button>
                      {" "}|{" "}
                      <button onClick={changeToInfo}>
                      Info
                      </button>
                      </h4>
                      </div>
                    </div>
                  :
                  <div className="color has-text-centered">
                    <h4 className="positionHomeButton"><button onClick={changeToHome}>Home</button></h4>
                    <h4 className="navbar-item"><button onClick={changeToVersion}>Version</button></h4>
                    <h4 className="navbar-item"><button onClick={changeToInfo}>Info</button></h4>
                  </div>
                    }
                </div>
            </header>
      </div>
      {home === true && <Home/>}
      {version === true && <Version/>}
      {info === true && <Info/>}
    </>
  );
}

export default App;