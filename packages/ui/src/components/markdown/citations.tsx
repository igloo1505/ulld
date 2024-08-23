import React from "react";
import type { serverClient } from "@ulld/api/serverClient";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";

interface MdxCitationsProps {
    citations: NonNullable<
        Awaited<ReturnType<typeof serverClient.mdx.getDatabaseMdx>>
    >["citations"];
    citationOrderList: string[]
}

export const MdxCitations = ({ citations = [], citationOrderList }: MdxCitationsProps) => {
    if (!citations || citations.length === 0) return null;
   let sortedCitations: BibEntry[] = []
    let citationIds = citations.map((x) => x.id)
    for (const citationId of citationOrderList) {
        let idx = citationIds.indexOf(citationId)
        if(idx >= 0){
            sortedCitations.push(new BibEntry(citations[idx], sortedCitations.length))
        }
    }
    return (
        <div className={"w-full"}>
            <h2 className={"w-full text-start text-xl font-semibold my-4"}>
                References
            </h2>
            {sortedCitations.map((citation) => {
                return citation.toHtml();
            })}
        </div>
    );
};

MdxCitations.displayName = "MdxCitations";
