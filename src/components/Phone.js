import React from "react"
import { useTranslation, Trans } from 'react-i18next';

function Phone({changeToHome, changeToVersion, changeToInfo, toggleLanguages, displayLanguages, positionButtons}) {

  const { i18n } = useTranslation();
  return (
    <div className="color has-text-centered">
                    <h4 className="navbar-item"><button onClick={changeToHome}>
                      <Trans i18nKey="description.home">
                        Αρχική
                      </Trans></button>
                    </h4>
                    <h4 className="navbar-item"><button onClick={changeToVersion}>
                      <Trans i18nKey="description.version">
                        Έκδοση
                      </Trans></button>
                    </h4>
                    <h4 className="navbar-item"><button onClick={changeToInfo}>
                      <Trans i18nKey="description.info">
                        Πληροφορίες
                      </Trans></button>
                    </h4>
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
                  </div>
  );
}

export default Phone;