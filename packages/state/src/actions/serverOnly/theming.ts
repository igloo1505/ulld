"use server"
import { cookies } from "next/headers";
import{ getThemeCookie } from "@ulld/tailwind/handleThemeCookies"

export const getThemeSERVER = () => {
    const cookieJar = cookies();
    return getThemeCookie(cookieJar);
};
