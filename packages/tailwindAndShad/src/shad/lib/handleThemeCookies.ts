import type {cookies} from "next/headers"
import {ThemeOptions} from "./themeUtils"
import { NextResponse } from "next/dist/server/web/spec-extension/response"


type CookieType = NextResponse<unknown>["cookies"] | ReturnType<typeof cookies>


export const getThemeCookie = async (cookieJar: CookieType) => {
     const theme = cookieJar.get("ulld-theme")
    if(!theme){
        cookieJar.set("ulld-theme", "violet")
        return "violet"
    }
    return theme.value
}



export const setThemeCookie = async (cookieJar: CookieType, newTheme?: ThemeOptions) => {
     cookieJar.set("ulld-theme", newTheme || "violet")
    return cookieJar
}
