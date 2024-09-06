import { ContentHeading } from "../../types/mdxStructure.js";

const removeIdSyntax = (s: string) => {
    if (s.includes("[#") && s.endsWith("]")) {
        return s.slice(0, s.lastIndexOf("["));
    }
    return s;
};

const removeLeadingPounds = (s: string): string => {
    if (s.startsWith("#")) {
        return removeLeadingPounds(s.slice(1));
    }
    return s;
};

const temporaryReplaceLogoAsTextWithEntry = (s: string) => {
    let re = /\<LogoAsText[^/]*\/\>/gm;
    return s.replace(re, "ULLD");
};

const replaceCodeStrings = (s: string) => {
    return s.replaceAll("`", "");
};

const funcs: ((s: string) => string)[] = [
    removeLeadingPounds,
    removeIdSyntax,
    temporaryReplaceLogoAsTextWithEntry,
    replaceCodeStrings,
];

const getMarkdownTitleDepth = (val: string) => {
    return val.indexOf(" ") as ContentHeading["depth"];
};

export const parseMarkdownTitle = (s: string) => {
    let val = s;
    for (const f of funcs) {
        val = f(val);
    }
    return val;
};

// TODO: Make this more consistent once things are building properly by tapping into the way id's are created through the remark plugin directly.
export const getMarkdownTitleId = (s: string): string | undefined => {
    let re = /.*\[\#(?<content>[^\]]*)\]/gm;
    let m = re.exec(s);
    return m?.groups?.content;
};

export const getContentHeadings = (rawContent: string): ContentHeading[] => {
    let titles = rawContent.split("\n").filter((f) => f.trim().startsWith("#"));
    let items: ContentHeading[] = titles.map((t) => {
        let id = getMarkdownTitleId(t);
        return {
            title: parseMarkdownTitle(t),
            depth: getMarkdownTitleDepth(t),
            url: id ? `#${id}` : "",
        };
    });
    return items;
};
