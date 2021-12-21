import React from "react"
import { Trans } from 'react-i18next';

function User() {

  return (
    <div className="positionHome">
        <div className= "has-text-centered">
        <Trans i18nKey="description.popUser">
        Λογαριασμός Χρήστη
        </Trans>
          
        </div>
    </div>
  );
}

export default User;