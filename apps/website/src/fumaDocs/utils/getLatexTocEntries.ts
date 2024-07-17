import { DocsPageProps } from "fumadocs-ui/page";


export const getLatexTocEntries = (toc: DocsPageProps["toc"] = [], content: string) => {
    let titles = content.split("\n").filter((f) => f.startsWith("#"))
    let t: DocsPageProps["toc"] = []
    toc.forEach((entry, i) => {
        let s = Array(entry.depth).fill("#").join("")
        const newTitle = titles[i].replace(s, "").trim()
        t.push({
            ...entry,
            title: titles[i].startsWith(s) ? newTitle : entry.title
        })
    })
    return t
};
