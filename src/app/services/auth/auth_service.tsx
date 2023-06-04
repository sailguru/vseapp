"use client"

import { setCookie, getCookie, hasCookie } from "cookies-next";

export function checkAuth(): Boolean {
    return hasCookie("_token");
}

export function getPhone() {
    return getCookie("phone");
}