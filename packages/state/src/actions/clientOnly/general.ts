"use client";
import { noteContainerPrefix } from "@ulld/utilities/staticAppProperties/main";
import { getHeadingHierarchy } from "../../formatting/getHeadingHierarchy";
import { getQuickLinkHtmlId, htmlEm } from "./dom";
import axios from "axios";
import {
    setDarkmode,
    showToast,
    clearEmbededPanelStateByPath,
} from "../../state/slices/ui";
import { setTocContent } from "../../state/slices/functionality";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { ToastConfigType } from "@ulld/utilities/types/toastConfig";

export const toggleSidebar = () =>
    document.body.classList.toggle("sidebarOpenPermanent");

export const toggleDarkMode = async () => {
    if (typeof window === "undefined") return;
    const html = htmlEm();
    const darkMode = html?.classList.contains("dark");
    const newDarkMode = !darkMode;
    if (html) {
        let newDarkmodeString = newDarkMode ? "dark" : "light";
        let methodType: "add" | "remove" = newDarkMode ? "add" : "remove";
        // consolidate all of these monstrosities into a single html attribute or class. Especially now since moving away from jupyter-react.
        html.classList[methodType]("dark");
        document.body.classList[methodType]("dark");
        html.setAttribute("data-color-mode", newDarkmodeString);
        html.setAttribute("data-theme", newDarkmodeString);
    }
    window.ulldStore?.dispatch(setDarkmode(newDarkMode));

    await fetch("/api/settings/toggleDarkmodeCookie", {
        method: "POST",
        body: JSON.stringify({
            darkmode: newDarkMode ? "darkMode" : "noDarkMode",
        })
    })
};

export const setTocPanelContent = (noteId: string | number) => {
    let hierarchy = getHeadingHierarchy();
    window.ulldStore?.dispatch(
        setTocContent({ headingContent: hierarchy, noteId }),
    );
};

const clearIdSelectMode = () => {
    if (typeof window === "undefined") return;
    htmlEm()?.classList.remove("idSelectMode");
    let ems = document.querySelectorAll("*[id]");
    ems.forEach((el) => el.removeEventListener("click", idSelectClickListener));
};

const idSelectClickListener = async (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    let target = e.target as HTMLElement;
    let id = target.id;
    let quickLink = getQuickLinkHtmlId();
    let path = quickLink
        ? `note:${quickLink}`
        : window.location.pathname.indexOf("#") === -1 &&
            window.location.pathname.indexOf("?") === -1
            ? window.location.pathname
            : window.location.pathname.split(/\#|\?/gm)[0];
    await copyStringToClipboard(`${path}#${id}`);
    clearIdSelectMode();
};

export const enterIdSelectMode = () => {
    let html = htmlEm();
    if (!html) return;
    html.classList.add("idSelectMode");
    let ems = document.getElementById("noteContainer")?.querySelectorAll("*[id]");
    if (!ems) return;
    ems.forEach(
        (el) =>
            !el.id.startsWith(noteContainerPrefix) &&
            el.addEventListener("click", idSelectClickListener),
    );
};

export const toggleEquationSelectMode = (val?: boolean) => {
    let html = htmlEm();
    if (!html) return;
    if (typeof val !== "boolean") {
        html.classList.toggle("signifyEquationIds");
    } else {
        html.classList[val ? "add" : "remove"]("signifyEquationIds");
    }
};

export const toggleAllJupyterFolds = (fold?: boolean) => {
    let ems = document.querySelectorAll<HTMLDivElement>("div.jupyter-foldable");
    if (ems && ems.length > 0) {
        let shouldFold =
            typeof fold === "boolean"
                ? fold
                : !Boolean(ems[0].classList.contains("jupyter-fold"));
        ems.forEach((el) =>
            el.classList[shouldFold ? "add" : "remove"]("jupyter-fold"),
        );
    }
};

export const showReduxToast = (t: ToastConfigType) => {
    window.ulldStore?.dispatch(showToast(t));
};

export const removeIdFromDom = (id: string) => {
    document.getElementById(id)?.remove();
};

export const resetCollapsablePanels = (pathname: string) => {
    window.ulldStore?.dispatch(clearEmbededPanelStateByPath(pathname));
};

export const setPreferFs = async (preferFs: boolean | "toggle" = "toggle") => {
    let res = await axios({
        method: "post",
        url: "/api/utils/setPreferFs",
        data: { preferFs },
    });
    if (res.data.success) {
        document.body.classList[res.data.ns ? "add" : "remove"]("preferFs");
    }
    return res.data.success;
};
