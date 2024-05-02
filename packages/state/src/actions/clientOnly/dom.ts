"use client";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { setAllowTooltips } from "../../state/slices/settings";
import { showToast as _showToast } from "../../state/slices/ui";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";

declare global {
    interface Window {
        ulldStore: ToolkitStore;
    }
}

export const panelEm = () => document.getElementById("sidebar-panel");
export const navbarEm = () => document.getElementById("top-navbar");
export const footerEm = () => document.getElementById("footer-panel");
export const htmlEm = () => document.querySelector("html");

export const setToolTipAllow = (allow: boolean) => {
    document.body.classList[allow ? "remove" : "add"]("tooltips-hidden");
    window.ulldStore?.dispatch(setAllowTooltips(allow));
};

export const toggleToolTips = () => {
    setToolTipAllow(document.body.classList.contains("tooltips-hidden"));
};

export const indicateBookmarked = (bookmarked: boolean) => {
    document.body.classList[bookmarked ? "add" : "remove"]("isBookmarked");
};

export const setCanBookmarkState = (canBookmark: boolean) => {
    document.body.classList[canBookmark ? "add" : "remove"]("canBookmark");
};

export const setQuickLinkHtmlId = (id?: string) =>
    id
        ? htmlEm()?.setAttribute("data-quickLinkId", id)
        : htmlEm()?.removeAttribute("data-quickLinkId");

export const getQuickLinkHtmlId = (): string | null =>
    htmlEm()?.getAttribute("data-quickLinkId") || null;

export const setInitialMonacoProps = () => {
    if (typeof window === "undefined") return;
    // @ts-ignore
    if (!window.MonacoEnvironment) {
        // @ts-ignore
        window.MonacoEnvironment = {
            getWorkerUrl: function (moduleId: any, label: string) {
                if (label === "json") {
                    return "./json.worker.bundle.js";
                }
                if (label === "css" || label === "scss" || label === "less") {
                    return "./css.worker.bundle.js";
                }
                if (label === "html" || label === "handlebars" || label === "razor") {
                    return "./html.worker.bundle.js";
                }
                if (label === "typescript" || label === "javascript") {
                    return "./ts.worker.bundle.js";
                }
                return "./editor.worker.bundle.js";
            },
        };
    }
};

export const setInitialBrowserProps = (darkMode?: boolean) => {
    setInitialMonacoProps();
    // document.documentElement.setAttribute()
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
