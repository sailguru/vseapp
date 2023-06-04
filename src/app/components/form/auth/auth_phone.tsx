"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../input";

export default function AuthPhone(props: any) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      phone: event.target.phone.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ADDRESS + ':' + process.env.NEXT_PUBLIC_BACKEND_PORT + process.env.NEXT_PUBLIC_AUTH_ENDPOINT;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json().then((data) => {
      if (data.hasOwnProperty("error")) {
        setError(true);
      }
      if (typeof data.code != "undefined") {
        alert(data.code)
        if (data.hasOwnProperty("error")) {
          setError(true);
        } else {
          setSuccess(true);
          props.phoneSetter(event.target.phone.value);
          props.callback(1);
        }
      }
    })

  };
  return <form onSubmit={handleSubmit} className={`phone__wrapper ${error ? ` error` : ``} ${success ? ` success` : ``}`}>
    <Input autofocus="true" wrapperClassName="input__phone" label={props.phoneLabel} name="phone"></Input>
    <button className="button button__submit" type="submit">{props.actionTitle}</button>
  </form>
}