"use client"

import { checkAuth, getPhone } from "@/app/services/auth/auth_service";
import React, { useEffect, useState } from "react";

export function UserAvatar(props: any) {
    const [phone, setPhone] = useState('')

    useEffect(() => {
        setPhone(truncatePhone(getPhone()?.toString()));
    }, [checkAuth()])

    const truncatePhone = (phone: string) => {
        return phone?.match(/.{4}$/g)?.toString();
    }

    if (phone != null){
    return <a href="/user" className={"navigation__avatar" + " text__sm"}>
        {phone}
    </a>;
    } else {
        return;
    }
}