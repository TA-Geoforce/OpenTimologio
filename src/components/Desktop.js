import React from "react"
import { useTranslation, Trans } from 'react-i18next';

function Desktop({changeToHome, changeToVersion, changeToInfo, toggleLanguages, displayLanguages, positionButtons}) {

const { i18n } = useTranslation();

  return (
    <div className="navbar-end">
                      <div className="position-text">
                        <h4>
                        <button className="positionHomeButton" onClick={changeToHome}> 
                          <Trans i18nKey="description.home">
                            Αρχική
                          </Trans>
                        </button>
                        <button onClick={changeToVersion}>
                          <Trans i18nKey="description.version">
                            Έκδοση
                          </Trans>
                        </button>
                        {" "}|{" "}
                        <button onClick={changeToInfo}>
                          <Trans i18nKey="description.info">
                            Πληροφορίες
                          </Trans>
                        </button>
                        {" "}|
                        <button>
                          <div className="navbar-item has-dropdown" onClick={() => toggleLanguages()}>
                            <div className="navbar-link">
                            <Trans i18nKey="description.language">
                              Γλώσσα
                            </Trans>
                            </div>
                            <div className={"navbar-dropdown " + displayLanguages}>
                              <button className={positionButtons} onClick={() => i18n.changeLanguage("en")}> English </button>
                              <button className={positionButtons} onClick={() => i18n.changeLanguage("gr")}> Greek </button>
                            </div>
                          </div>
                        </button>
                      </h4>
                      </div>
                    </div>
  );
}

export default Desktop;