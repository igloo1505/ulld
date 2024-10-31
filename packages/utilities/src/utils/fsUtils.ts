import type { z } from "zod";
import axios from "axios";
import type { filePathGlobPropsSchema } from "../schemas/filePath/filePathInput.js";

export const withForwardSlash = (p: string) =>
    p.startsWith("/") ? p : `/${p}`;

export const withForwardSlashOptional = (p?: string) =>
    typeof p === "undefined" ? undefined : withForwardSlash(p);

export const noTrailingSlash = (p: string) =>
    p.endsWith("/") ? p.slice(0, p.length - 1) : p;

export const withTrailingSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export const makeHref = (s: string) => {
    if (/^http(s?):\/\//gm.test(s)) {
        return s;
    }
    if(typeof window === "undefined"){
        return s
    }
    const isHttps = window.location.href.startsWith("http")
        ? window.location.href.startsWith("https")
        : process.env.NEXT_PUBLIC_PRODUCTION_REMOTE;
    return `${isHttps ? "https" : "http"}://${s}`;
};

export const noLeadingSlash = (p: string) =>
    p.startsWith("/") ? p.slice(1, p.length) : p;

export const setSlashes = ({
    value,
    leading,
    trailing,
}: {
    value: string;
    leading: boolean;
    trailing: boolean;
}): string => {
    let v = value;
    v = leading ? withForwardSlash(v) : noLeadingSlash(v);
    v = trailing ? withTrailingSlash(v) : noTrailingSlash(v);
    return v;
};

export const parentDir = (p: string): string =>
    p.includes("/") ? p.slice(0, p.lastIndexOf("/")) : p;

export const getFilenameFromString = (p: string): string =>
    !p.includes("/") ? p : p.slice(p.lastIndexOf("/") + 1, p.length);

export const ensureRootRelative = (p: string, fsRoot: string) =>
    withForwardSlash(!p.includes(fsRoot) ? p : p.split(fsRoot)[1]);

export const ensureAbsolute = (p: string, fsRoot: string): string => {
    return p.includes(fsRoot)
        ? p
        : `${fsRoot}${setSlashes({ value: p, leading: true, trailing: false })}`;
};

export const getParentDirAndFilename = (
    p: string,
    ensureRootRelativeParent = true,
    fsRoot: string,
) => {
    return {
        parent: ensureRootRelativeParent
            ? ensureRootRelative(parentDir(p), fsRoot)
            : parentDir(p),
        filename: getFilenameFromString(p),
    };
};

export const fileExtension = (path: string) => {
    return path.split(".").at(-1)?.toLowerCase();
};

export const replacePrefix = (
    content: string,
    regex: string,
    replaceWith = "",
) => {
    return content.startsWith(regex)
        ? `${replaceWith}${content.split(regex)[1]}`
        : content;
};

export const replaceAppendix = (
    content: string,
    regex: string,
    replaceWith = "",
) => {
    return content.endsWith(regex)
        ? `${content.slice(0, content.length - regex.length)}${replaceWith}`
        : content;
};

export const getFsRootGlob = async (
    props: z.input<typeof filePathGlobPropsSchema>,
) => {
    try {
        const res = await axios.post("/api/glob", props);
        if(res.data.filePaths){
            return res.data.filePaths as string[];
        }
    } catch (err) {
        console.error(err);
    }
};
