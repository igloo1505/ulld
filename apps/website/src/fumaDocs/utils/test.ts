import { DocsPageProps } from "fumadocs-ui/page";
import { parseMarkdownTitle } from "@ulld/utilities/getMarkdownHeadings";

export const getLatexTocEntries = (
    toc: DocsPageProps["toc"] = [],
    content: string,
) => {
    let titles = content.split("\n").filter((f) => f.startsWith("#"));
    let t: DocsPageProps["toc"] = [];
    if (toc.length !== titles.length) {
        console.error(
            `Found different lengths for the toc. Fumadocs found ${toc.length} entries, and you found ${titles.length} for titles ${titles.join("\n")}`,
        );
    }
    toc.forEach((entry, i) => {
        const newTitle = titles[i].trim();
        t.push({
            ...entry,
            title: parseMarkdownTitle(newTitle),
            // Removed this. No longer checking for validity and relying only on index. THe validity check was unreliable previously, but if this causes new issues revisit this.
            // let s = Array(entry.depth).fill("#").join("");
            // title: titles[i].startsWith(s) ? parseTitle(newTitle) : entry.title,
        });
    });
    return t;
};
