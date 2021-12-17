import React from "react"
import { Trans } from 'react-i18next';
var pjson = require('../../package.json');

function Version() {

  return (
    <div className="positionVersion">
        <div className= "has-text-centered">
        <Trans i18nKey="description.version_info">
          The version is {" "}
        </Trans> {pjson.version}.
        </div>
    </div>
  );
}

export default Version;