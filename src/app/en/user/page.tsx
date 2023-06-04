import React, { useEffect } from "react";
import { checkAuth, getPhone } from "@/app/services/auth/auth_service";
import { purgeAuth } from "@/app/services/auth/persistence";
import { useTranslations } from "next-intl";
import { GetServerSideProps } from "next/types";

export default function Page(context: any) {
    const t = useTranslations();
    console.log(checkAuth())
    //purgeAuth()

    return <div className="auth__login__wrapper">

    </div>
}