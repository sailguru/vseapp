import React from "react";

export function AuthBanner(props: any) {
    return <div className={"banner__auth__wrapper"}>
        <p className="text__bg banner__heading">{props.heading}</p>
    </div>;
}