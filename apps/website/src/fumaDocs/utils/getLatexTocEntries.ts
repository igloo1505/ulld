import { DocsPageProps } from "fumadocs-ui/page";

const removeIdSyntax = (s: string) => {
    if (s.includes("[#") && s.endsWith("]")) {
        return s.slice(0, s.lastIndexOf("["));
    }
    return s;
};

const temporaryReplaceLogoAsTextWithEntry = (s: string) => {
    let re = /\<LogoAsText[^/]*\/\>/gm;
    return s.replace(re, "ULLD");
};

const parseTitle = (s: string) => {
    let val = s;
    val = removeIdSyntax(val);
    val = temporaryReplaceLogoAsTextWithEntry(val);
    return val;
};

export const getLatexTocEntries = (
    toc: DocsPageProps["toc"] = [],
    content: string,
) => {
    let titles = content.split("\n").filter((f) => f.startsWith("#"));
    let t: DocsPageProps["toc"] = [];
    toc.forEach((entry, i) => {
        let s = Array(entry.depth).fill("#").join("");
        const newTitle = titles[i].replace(s, "").trim();
        t.push({
            ...entry,
            title: titles[i].startsWith(s) ? parseTitle(newTitle) : entry.title,
        });
    });
    return t;
};
