"use client"

import { setCookie, getCookie, hasCookie, deleteCookie } from "cookies-next";
import { checkAuth } from "./auth_service";

export default function AuthPersistence(token: string, phone: string) {
    try {
        return storeCookies(token, phone);
    } catch (error) {
        return error;
    }
}

export function storeCookies(token: string, phone: string) {
    setCookie('_token', token, { secure: true });
    setCookie('phone', phone);
}

export function purgeAuth() {
    deleteCookie('_token');
    deleteCookie('phone');
}