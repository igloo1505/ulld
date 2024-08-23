import { UnifiedMdxParser } from "../../../types";
import { replaceRecursively } from "@ulld/utilities/general";

interface ExtendedFrontMatter {
    tags: string[]
}

const formatTag = (s: string) => {
    return `<a className="queryLink queryTag" href="/searchAll?tags=${s}">#${s}</a>`;
};

export const parseTags: UnifiedMdxParser<ExtendedFrontMatter> = async (
    data,
) => {
    const regex = /\[#(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm;
    let results: string[] = [];
    let c = data.content;
    let m;
    do {
        m = regex.exec(c);
        if (
            m &&
            m.groups?.value &&
            m.groups?.value.trim() !== "" &&
            m.groups.value !== "\n"
        ) {
            let _link = formatTag(m.groups.value);
            c = replaceRecursively(
                c,
                new RegExp(`\\[#${m.groups.value}\\]`, "gm"),
                _link,
            );
            results.push(m.groups.value);
        }
    } while (m);
    let reg2 = /<TagBar>(?<content>[\w|\s|\d|\-|.]*)<\/TagBar>/gm;
    let l;
    do {
        m = reg2.exec(c);
        let _results = m?.groups?.content.split(" ");
        if (_results) {
            for (const r of _results) {
                let rt = r.trim();
                if (rt.length !== 0 && rt !== "\n") {
                    results.push(rt);
                }
            }
        }
    } while (l);


    return {
        content: c,
        data: {
            ...data.data,
            tags: [...(data.data?.tags || []), ...results],
        },
    };
};
