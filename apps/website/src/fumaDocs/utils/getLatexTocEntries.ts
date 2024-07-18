import { DocsPageProps } from "fumadocs-ui/page";

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

const parseTitle = (s: string) => {
    let val = s;
    val = removeLeadingPounds(val);
    val = removeIdSyntax(val);
    val = temporaryReplaceLogoAsTextWithEntry(val);
    return val;
};

export const getLatexTocEntries = (
    toc: DocsPageProps["toc"] = [],
    content: string,
) => {
    let titles = content.split("\n").filter((f) => f.trim().startsWith("#"));
    let t: DocsPageProps["toc"] = [];
    if(toc.length !== titles.length){
        console.error(`Found different lengths for the toc. Fumadocs found ${toc.length} entries, and you found ${titles.length}.`)
    }
    toc.forEach((entry, i) => {
        const newTitle = titles[i].trim();
        t.push({
            ...entry,
            title: parseTitle(newTitle),
            // Removed this. No longer checking for validity and relying only on index. THe validity check was unreliable previously, but if this causes new issues revisit this.
            // let s = Array(entry.depth).fill("#").join("");
            // title: titles[i].startsWith(s) ? parseTitle(newTitle) : entry.title,
        });
    });
    return t;
};
