import React, { Suspense } from "react";
import { useTranslations } from 'next-intl';
import dynamic from "next/dynamic";
import { GeneralPlaceholder } from "@/app/components/misc/placeholder/general_placeholder";
import AuthForm from "@/app/components/form/auth/auth_form";

//const AuthForm = dynamic(() => import("@/app/components/form/auth/auth_form"), { ssr: false })

export default function Page() {
    const t = useTranslations();
    return <div className="auth__login__wrapper">
        <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
            <AuthForm phoneLabel={t("form.auth.phone") + ':'}
                verificationCodeLabel={t("form.auth.verification_code_label") + ':'}
                actionTitle={t("form.auth.submit")}
            ></AuthForm>
        </Suspense>
    </div>
}