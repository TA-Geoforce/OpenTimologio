import React from "react"
var pjson = require('../../package.json');

function Version() {

  return (
    <div className="positionVersion">
        <div className= "has-text-centered">
           The Version is {pjson.version}.
        </div>
    </div>
  );
}

export default Version;