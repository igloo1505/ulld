import { getTableOfContents, TOCItemType } from 'fumadocs-core/server';
import { parseMarkdownTitle } from '../additionalParsers/mdx/getContentHeadings';


export type { TOCItemType }


export const getLatexTocEntries = (
    toc: TOCItemType[] = [],
    content: string,
) => { 
    let titles = content.split("\n").filter((f) => f.trim().startsWith("#"));
    let t: TOCItemType[]  = [];
    if (toc.length !== titles.length) {
        console.error(
            `Found different lengths for the toc. Fumadocs found ${toc.length} entries, and you found ${titles.length}.`,
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





export const getTocFromContent = async (content: string) => {
    let tocItems = await getTableOfContents(content)
    return getLatexTocEntries(
        tocItems,
        content
    )
}
