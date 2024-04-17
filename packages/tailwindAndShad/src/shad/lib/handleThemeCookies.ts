"use server"
import type {cookies} from "next/headers"
import {ThemeOptions} from "./themeUtils"


export const getThemeCookie = (cookieJar: ReturnType<typeof cookies>) => {
     const theme = cookieJar.get("theme")
    if(!theme){
        cookieJar.set("theme", "violet")
        return "violet"
    }
    return theme
}



export const setThemeCookie = (cookieJar: ReturnType<typeof cookies>, newTheme?: ThemeOptions) => {
     cookieJar.set("theme", newTheme || "violet")
    return cookieJar
}
