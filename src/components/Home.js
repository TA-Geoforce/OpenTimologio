import React from "react"
import { Trans } from 'react-i18next';

function Home() {

  return (
    <div className="positionHome">
        <div className= "has-text-centered">
        <Trans i18nKey="description.part4">
          Welcome to OpenTimologio.
        </Trans>
        </div>
    </div>
  );
}

export default Home;