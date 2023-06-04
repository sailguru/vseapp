"use client"

import React from "react";
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';

export function Heading(props: any) {

    return <div className={"heading__" + (typeof props.size != 'undefined' ? props.size : "sm") + " navigation__heading"}>
        {getHeading()}
    </div>;
}

function getHeading() {
    const t = useTranslations();

    let heading:string = '';

    switch(usePathname()) {
        default:
            heading = t("welcome.heading")
        break;
        case "/user":
            heading = t("heading.user")
        break;
        case "/auth/login":
            heading = t("heading.auth")
        break;
    }
    return heading;
}