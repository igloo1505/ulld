"use client";
import axios from "axios";
import { UlldColorTheme, UlldPlotTheme } from "@ulld/utilities/types";
import { getHtmlElementAttribute } from "@ulld/utilities/utils-dom";
import { ulldDefaultColorThemes } from "@ulld/utilities/defaultColorThemeList";

export const changeTheme = async (newTheme: UlldColorTheme) => {
    console.log("newTheme: ", newTheme)
    if(!ulldDefaultColorThemes.includes(newTheme)){
        newTheme = "ulld"
    }
    let res = await axios.post("/api/settings/handleTheme", { theme: newTheme });
    let success = Boolean(res.data?.success);
    if (success) {
        window.localStorage.setItem("ulld-theme", newTheme);
        document.querySelector("html")?.setAttribute("data-ulld-theme", newTheme);
    }
    return success;
};

export const changePlotTheme = async (newTheme: UlldPlotTheme) => {
    let res = await axios.post("/api/settings/handlePlotTheme", { theme: newTheme });
    let success = Boolean(res.data?.success);
    if (success) {
        window.localStorage.setItem("ulld-plot-theme", newTheme);
    }
    return success;
};

export const getThemeCLIENT = (): UlldColorTheme => {
    let t: UlldColorTheme | undefined | null = window.localStorage.getItem(
        "ulld-theme",
    ) as UlldColorTheme | undefined;
    if (!t) {
        t = getHtmlElementAttribute("data-ulld-theme") as UlldColorTheme;
    }
    if (!t) {
        changeTheme("violet");
        return "violet";
    }
    return t;
};
