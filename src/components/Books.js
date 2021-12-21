import React from "react"
import { Trans } from 'react-i18next';

function Books() {

  return (
    <div className="positionHome">
        <div className= "has-text-centered">
        <Trans i18nKey="description.popBooks">
          Βιβλία
        </Trans>
        </div>
    </div>
  );
}

export default Books;