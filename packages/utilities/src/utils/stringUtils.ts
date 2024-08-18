import { getAllRegexMatches } from "./getAllRegexMatches";
import distance from "jaro-winkler"

export const capitalize = (val: string) =>
    `${val[0].toUpperCase()}${val.slice(1)}`;


export const camelCase = (val: string) => {
    return val
        .replaceAll(/\-|\_/gm, " ")
        .split(" ")
        .map((l, i) => (i === 0 ? l.toLowerCase() : capitalize(l)))
        .join("");
};


export const getFileExtension = (path: string) => {
       return path.includes(".") ? path.slice(path.lastIndexOf(".")) : undefined
    }

// TODO: Improve this method. Create a server only variant and use the path node module.
export const pathHasExtension = (path: string) => {
    let ext = getFileExtension(path)
    return Boolean(ext && ext.length > 0 && ext.length <= 4)
}

export const applyFileSuffix = (path: string, extension: `.${string}`) => {
    return pathHasExtension(path) ? path : `${path}${extension}`;
};


export const removeMathDollarSigns = (_s: string) => {
    let s = _s.trim();
    if (
        s.startsWith("$$") &&
        s.endsWith("$$") &&
        getAllRegexMatches(s, /\$\$/gm).length === 2
    ) {
        return s.replaceAll("$$", "").trim()
    }
    if(
        s.startsWith("$") &&
        s.endsWith("$") &&
        getAllRegexMatches(s, /\$/gm).length === 2
    ) {
        return s.replaceAll("$", "").trim()
    }
    return s
};


export const sortStringsBySimilarity = (searchString: string, opts: string[], caseSensitive: boolean = false) => {
    return opts.map((x) => ({
        /* @ts-ignore */
        similarity: distance(searchString, x, {
            caseSensitive
        }),
        value: x
    })).sort((a, b) => a.similarity < b.similarity ? 1 : a.similarity > b.similarity ? -1 : 0)
}


export const getMostSimilarString = (searchString: string, opts: string[], caseSensitive: boolean = false) => {
       return sortStringsBySimilarity(searchString, opts, caseSensitive)[0].value
}
