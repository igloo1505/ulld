import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { UnifiedMdxParser } from "@ulld/api/types";
import {
    bibEntryPropsSchema,
    bibEntryTransform,
} from "@ulld/api/generalPrismaSchemas";
import { replaceRecursively } from "@ulld/utilities/general";

const formatCitation = (s: string, index: number) => {
    return `<span style={{
width: "0.5rem",
height: "100%",
position: "relative"
}}><a href='#bib-${s}' className="citation citationAnchor" id="cit-${s}-idx-${index}">${index + 1}</a></span>`;
};

interface ExtendedFrontMatter {
    citations: BibEntry[];
    citationsListOrder: string[];
}

export const parseMdxCitations: UnifiedMdxParser<ExtendedFrontMatter> = async (
    data,
) => {
    let c = data.content;
    let foundCitations: BibEntry[] = [];
    const regex = /\[@(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm;
    let results: { value: string; length: number; index: number }[] = [];
    let m;
    do {
        m = regex.exec(c);
        if (m && m.groups?.value) {
            results.push({
                value: m.groups.value,
                index: m.index,
                length: m[0].length,
            });
        }
    } while (m);
    let fr: {
        htmlCitation: string;
        id: string;
        pageIndex: number;
        type: string | null;
    }[] = [];
    const rList = results.map((r) => r.value.toLowerCase());
    let citations = await data.serverClient.bibliography.getBibCitation(rList);
    for (const k of citations) {
        const rIndex = rList.indexOf(k.id.toLowerCase());
        const result = results.at(rIndex);
        if (result) {
            let _link = formatCitation(k.id, rIndex);
            c = replaceRecursively(
                c,
                new RegExp(`\\[@${result.value}\\]`, "gmi"),
                _link,
            );
            if (k.htmlCitation) {
                fr.push({
                    htmlCitation: k.htmlCitation,
                    id: k.id,
                    pageIndex: rIndex,
                    type: k.type,
                });
            } else {
                console.log(`No htmlCitation found for ${k.id}`);
            }
        }
    }
    foundCitations = foundCitations.concat(
        fr.map(
            (c) =>
                new BibEntry(
                    bibEntryPropsSchema
                        .innerType()
                        .partial({
                            type: true,
                        })
                        .transform(bibEntryTransform)
                        .parse({
                            htmlCitation: c?.htmlCitation,
                            id: c.id,
                            type: c.type,
                        }),
                    c.pageIndex,
                ),
        ),
    );
    let citationsListOrder = foundCitations
        .sort((a: any, b: any) => a.tempPageIndex - b.tempPageIndex)
        .map((c) => c.id);
    return {
        content: c,
        data: {
            ...data.data,
            citations: foundCitations,
            citationsListOrder,
        },
    };
};
