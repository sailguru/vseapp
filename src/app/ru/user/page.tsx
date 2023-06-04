import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { GetServerSideProps } from "next/types";

import '@/app/styles/scss/pages/user/user.scss'

export default function Page() {
    const t = useTranslations();
    return <div className="user__wrapper">

    </div>
}