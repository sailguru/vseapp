"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import AuthPhone from "./auth_phone";
import AuthVerificationCode from "./auth_verification_code";
import { useState } from 'react';
import AuthPersistence from "@/app/services/auth/persistence";
import { useRouter } from 'next/navigation';
import { checkAuth } from "@/app/services/auth/auth_service";
import Loader from "../../misc/loader/loader";

export default function AuthForm(props: any) {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        if (checkAuth())
            setAuth(true);
    })
    
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState(0);
    const router = useRouter();

    const redirect = (url:string) => {
        router.push(url);
    }

    if (!auth) {
    return <div className="auth__form__wrapper animate__animated animate__fadeIn">
        {step == 0 ? <AuthPhone phoneSetter={setPhone} callback={setStep} phoneLabel={props.phoneLabel} actionTitle={props.actionTitle}></AuthPhone> : ''}
        {step == 1 ? <AuthVerificationCode loader={setStep} phone={phone} actionTitle={props.actionTitle} verificationCodeLabel={props.verificationCodeLabel} callback={redirect}></AuthVerificationCode> : ''}
    </div>
    } else {
       return router.push('/')
    }
}