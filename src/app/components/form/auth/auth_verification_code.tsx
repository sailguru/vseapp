"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../input";
import AuthPersistence from "@/app/services/auth/persistence";
import Loader from "../../misc/loader/loader";

export default function AuthVerificationCode(props: any, callback: any) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const numOfFields = 6;

  const handleChange = (e: any) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < numOfFields) {
        const nextSibling = document.querySelector(
          `input[name=otp-${parseInt(fieldIndex, 10) + 1}]`
        );

        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  }

  const combineCode = (element:any) => {
    let inputs = [...element.querySelectorAll('.input__otp input')]
    let code:string = '';
    inputs.forEach((input) => {
      code += input.value;
    })
    console.log(code)
    return code;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      phone: event.target.phone.value,
      code: combineCode(event.target)
    };



    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_BACKEND_ADDRESS + ':' + process.env.NEXT_PUBLIC_BACKEND_PORT + process.env.NEXT_PUBLIC_VERIFY_ENDPOINT;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json().then((data) => {
      if (response.status == 412){
        setError(true);
      }
      if (typeof data != "undefined") {
        if (data.hasOwnProperty("error")) {
          setError(true);
        } else {
          setSuccess(true);
          AuthPersistence(data.token, data.phone);
          props.loader(1);
          props.callback('/');
        }
      }
    })


  };
  if (!success){
  return <div className="otp__wrapper">
    <label>{props.verificationCodeLabel}</label>
    <form onSubmit={handleSubmit} className={`otp__form ${error ? ` error` : ``} ${success ? ` success` : ``}`}>
    <input hidden value={props.phone} name="phone"></input>
      <div className="input__otp__wrapper">
        <Input pattern="[0-9]" required="true" autofocus="true" name="otp-1" maxLength="1" wrapperClassName="input__otp" onChange={handleChange}></Input>
        <Input pattern="[0-9]" required="true" wrapperClassName="input__otp" name="otp-2" maxLength="1" onChange={handleChange}></Input>
        <Input pattern="[0-9]" required="true" wrapperClassName="input__otp" name="otp-3" maxLength="1" onChange={handleChange}></Input>
        <Input pattern="[0-9]" required="true" wrapperClassName="input__otp" name="otp-4" maxLength="1" onChange={handleChange}></Input>
        <Input pattern="[0-9]" required="true" wrapperClassName="input__otp" name="otp-5" maxLength="1" onChange={handleChange}></Input>
        <Input pattern="[0-9]" required="true" wrapperClassName="input__otp" name="otp-6" maxLength="1" onChange={handleChange}></Input>
      </div>
      <button className="button button__submit" type="submit">{props.actionTitle}</button>
    </form>
  </div>
  } else {
    return <Loader></Loader>;
  }
}