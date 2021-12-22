import React from "react"
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { useForm } from "react-hook-form"


function User() {

  const [firstName, setName] = useState("");
  const [surName, setSurName] = useState("");
  const { handleSubmit, register, errors} = useForm();

  const handleChangeFirstName = (event) => {
    setName(event.target.value);  
  }

  const handleChangeSurname = (event) => {
    setSurName(event.target.value);
  }

  const onSubmit = () => {
    
  }

  return (
    <div className="parent-contact-form"> 
            <form onSubmit={handleSubmit(onSubmit)} className="resize container is-max-desktop">
                <div className="field">
                    <label htmlFor="firstName" className="label">
                    <Trans i18nKey="description.name">
                      Όνομα Χρήστη
                    </Trans>
                    </label>
                    <div className="control has-icons-left ">
                        <input id="firstName" name = "username" className="input" type="text" onChange={handleChangeFirstName} placeholder="First Name" ref={register({required: true, minLength: 3})}></input>
                        <span className="icon is-small is-left">
                          <i className="fa fa-user"></i>
                        </span>
                    </div>
                    {errors.username && errors.username.type === "required" && <span className = "fa visible failure message">
                    <Trans i18nKey="description.nameError1">
                      Υποχρεωτικό πεδίο το όνομα χρήστη.
                    </Trans></span>}
                    {errors.username && errors.username.type === "minLength" && <span className = "fa visible failure message">
                    <Trans i18nKey="description.nameError1">
                      Το όνομα χρήστη πρέπει να είναι τουλάχιστον 3 χαρακτήρες.
                    </Trans>
                    </span>}
                </div>
                <div className="field">
                    <label htmlFor="surname" className="label">
                    <Trans i18nKey="description.surname">
                      Επίθετο
                    </Trans></label>
                    <div className="control has-icons-left ">
                        <input id="surname" name="surname" className="input" type="text" onChange={handleChangeSurname} placeholder="Surname" ref={register({required: true, minLength: 3})}></input>
                        <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                        </span>
                    </div>
                    {errors.surname && errors.surname.type === "required" && <span className = "fa visible failure message">
                      <Trans i18nKey="description.surname">
                      Υποχρεωτικό πεδίο το επίθετο.
                      </Trans>
                    </span>}
                    {errors.surname && errors.surname.type === "minLength" && <span className = "fa visible failure message">
                      <Trans i18nKey="description.surname">
                      Το επίθετο πρέπει να είναι τουλάχιστον 3 χαρακτήρες.
                      </Trans>
                    </span>}
                </div>
                <input className="active" type="submit" value="Login"/>
            </form>
        </div>
  );
}

export default User;