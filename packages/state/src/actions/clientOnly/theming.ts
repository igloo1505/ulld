"use client";
import axios from "axios";
import { ThemeOptions } from "@ulld/tailwind/themeUtils";

// TODO: Come back here and handle this asap. Would be a huge value add.
export const changeTheme = async (newTheme: ThemeOptions) => {
    let res = await axios.post("/api/settings/handleTheme", { theme: newTheme });
    let success = Boolean(res.data?.success);
    if (success) {
        window.localStorage.setItem("ulld-theme", newTheme);
        document.querySelector("html")?.setAttribute("data-ulld-theme", newTheme);
    }
    return success;
};

export const getThemeCLIENT = (): ThemeOptions => {
    let t: ThemeOptions | undefined | null = window.localStorage.getItem(
        "ulld-theme",
    ) as ThemeOptions | undefined;
    if (!t) {
        t = document.querySelector("html")?.getAttribute("data-ulld-theme") as ThemeOptions
    }
    if (!t) {
        changeTheme("violet");
        return "violet";
    }
    return t;
};
