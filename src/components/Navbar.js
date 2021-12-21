import React from "react"
import { useTranslation, Trans } from 'react-i18next';
import "../scss/components/Navbar.scss"
function Navbar({goToHome, goToVersion, goToInfo, toggleLanguages, displayLanguages, openContent}) {

const { i18n } = useTranslation();

  return (
    <div className={openContent === "" ? "navbar-end" : "color has-text-centered"} >
        <div className={openContent === "" ? "position-text" : ""}>
        <h4 className={openContent === "" ? "" : "navbar-item"}>
        <button className={openContent === "" ? "positionHomeButton" : ""} onClick={goToHome}> 
            <Trans i18nKey="description.home">
                Αρχική
            </Trans>
        </button>
        </h4>
        <h4 className={openContent === "" ? "positionCategory" : "navbar-item"}>
            <button onClick={goToVersion}>
                <Trans i18nKey="description.version">
                    Έκδοση
                </Trans>
            </button>
        </h4>
            {openContent === "" ? <div className="positionCategory">{" "}|{" "}</div> : null}
        <h4 className={openContent === "" ? "positionCategory" : "navbar-item"}>
            <button onClick={goToInfo}>
                <Trans i18nKey="description.info">
                    Πληροφορίες
                </Trans>
            </button>
        </h4>
        {openContent === "" ? <div className="positionCategory">{" "}|</div> : null}
            <h4 className="languageMargin">
                <div className="navbar-item has-dropdown" onClick={() => toggleLanguages()}>
                <button className="navbar-link">
                    <Trans i18nKey="description.language">
                        Γλώσσα
                    </Trans>
                </button>
                <div className={"navbar-dropdown " + displayLanguages}>
                    <button className="languageButtonsMobile" onClick={() => i18n.changeLanguage("en")}> English </button>
                    <button className="languageButtonsMobile" onClick={() => i18n.changeLanguage("gr")}> Greek </button>
                </div>
                </div>
            </h4>
        </div>
    </div>
  );
}

export default Navbar;