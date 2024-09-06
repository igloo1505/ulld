import { LetterType, SearchAllSearchType } from "../types/general.js";
import { SearchAllParams } from "../types/pageParams.js";
import { ArrayUtilities } from "./arrayUtilities.js";

export const getFirstLetterWithLatex = (value: string): LetterType => {
    return value.replaceAll(/\\|\:|\-|\=|\_/gm, "")[0] as LetterType;
};

export const getSearchType = (sp: SearchAllParams): SearchAllSearchType => {
    if (sp.equationId) {
        return "byEquation";
    }
    if (sp.sequentialId) {
        return "bySequentialId";
    }
    if (sp.tags && sp.tags.length) {
        return "byTag";
    }
    return "searchAll";
};

export const searchAllParamsToSearchParamsClass = (
    sp?: Partial<SearchAllParams>,
): URLSearchParams => {
    let data = new URLSearchParams();
    if (!sp) {
        return data;
    }
    if (sp.query) {
        data.set("query", sp.query);
    }
    if (sp.page || typeof sp.page === "number") {
        data.set("page", sp.page);
    }
    if (sp.tags) {
        for (const t of ArrayUtilities.beArray(sp.tags)) {
            data.append("tags", t);
        }
    }
    if (sp.take) {
        data.set("take", sp.take);
    }
    if (sp.remote) {
        data.set("remote", "true");
    }
    if (sp.topics) {
        for (const t of ArrayUtilities.beArray(sp.topics)) {
            data.append("topics", t);
        }
    }
    if (sp.subjects) {
        for (const t of ArrayUtilities.beArray(sp.subjects)) {
            data.append("subjects", t);
        }
    }
    if (sp.perPage) {
        data.set("perPage", sp.perPage);
    }
    if (sp.tagRegex) {
        for (const t of ArrayUtilities.beArray(sp.tagRegex)) {
            data.append("tagRegex", t.source);
        }
    }
    if (sp.citations) {
        for (const c of ArrayUtilities.beArray(sp.citations)) {
            data.append("citations", c);
        }
    }
    if (sp.categories) {
        for (const t of ArrayUtilities.beArray(sp.categories)) {
            data.append("categories", t);
        }
    }
    if (sp.sequentialId) {
        data.set("sequentialId", sp.sequentialId);
    }
    if (sp.equationId) {
        data.set("equationId", sp.equationId);
    }
    return data;
};

export const getTaggablesFromSearchAllParams = (sp: SearchAllParams) => {
    return {
        tags: sp.tags || ([] as string[]),
        topics: sp.topics || ([] as string[]),
        subjects: sp.subjects || ([] as string[]),
    };
};

export const clearNullSearchParams = (p: URLSearchParams) => {
    for (const k of p.keys()) {
        let val = p.get(k);
        if (!val) {
            p.delete(k);
        }
    }
    return p;
};
