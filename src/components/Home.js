import React from "react"
import { Trans } from 'react-i18next';

function Home() {

  return (
    <div className="positionHome">
        <div className= "has-text-centered">
        <Trans i18nKey="description.welcome">
          Καλωσήρθατε στο OpenTimologio.
        </Trans>
        </div>
    </div>
  );
}

export default Home;