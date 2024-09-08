import { LetterType, SearchAllSearchType } from "../types/general.js";
import { SearchAllParams } from "../types/pageParams.js";
export declare const getFirstLetterWithLatex: (value: string) => LetterType;
export declare const getSearchType: (sp: SearchAllParams) => SearchAllSearchType;
export declare const searchAllParamsToSearchParamsClass: (sp?: Partial<SearchAllParams>) => URLSearchParams;
export declare const getTaggablesFromSearchAllParams: (sp: SearchAllParams) => {
    tags: string[];
    topics: string[];
    subjects: string[];
};
export declare const clearNullSearchParams: (p: URLSearchParams) => URLSearchParams;
//# sourceMappingURL=searchUtils.d.ts.map