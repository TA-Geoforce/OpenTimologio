import React from "react"
import { useTranslation, Trans } from 'react-i18next';

function Desktop({changeToHome, changeToVersion, changeToInfo, toggleLanguages, displayLanguages, positionButtons, openContent}) {

const { i18n } = useTranslation();

  return (
    <div className={openContent === "" ? "navbar-end" : "color has-text-centered"} >
        <div className={openContent === "" ? "position-text" : ""}>
        <h4 className={openContent === "" ? "" : "navbar-item"}>
        <button className={openContent === "" ? "positionHomeButton" : ""} onClick={changeToHome}> 
            <Trans i18nKey="description.home">
                Αρχική
            </Trans>
        </button>
        </h4>
        <h4 className={openContent === "" ? "positionCategory" : "navbar-item"}>
            <button onClick={changeToVersion}>
                <Trans i18nKey="description.version">
                    Έκδοση
                </Trans>
            </button>
        </h4>
            {openContent === "" ? <div className="positionCategory">{" "}|{" "}</div> : null}
        <h4 className={openContent === "" ? "positionCategory" : "navbar-item"}>
            <button onClick={changeToInfo}>
                <Trans i18nKey="description.info">
                    Πληροφορίες
                </Trans>
            </button>
        </h4>
        {openContent === "" ? <div className="positionCategory">{" "}|</div> : null}
        <h4>
        <button>
            <div className="navbar-item has-dropdown" onClick={() => toggleLanguages()}>
            <div className="navbar-link">
            <Trans i18nKey="description.language">
                Γλώσσα
            </Trans>
            </div>
            <div className={"navbar-dropdown " + displayLanguages}>
                <button className="languageButtonsPhone" onClick={() => i18n.changeLanguage("en")}> English </button>
                <button className="languageButtonsPhone" onClick={() => i18n.changeLanguage("gr")}> Greek </button>
            </div>
            </div>
        </button>
        </h4>
        </div>
    </div>
  );
}

export default Desktop;