import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { replaceRecursively } from "@ulld/utilities/general";
import { parseBibFile } from "bibtex";
import Cite from "citation-js";

interface GetHtmlCitationsByIdsProps {
    bibFileContent: string;
    ids: string[];
    cslFileContent?: string;
}

type EntryType = ReturnType<typeof BibEntry.fromFsList>[number];

type ResItem = ReturnType<EntryType["connectOrCreateArgs"]>["create"] & {
    pageIndex: number;
};

export const getHtmlCitationsByIds = ({
    bibFileContent,
    ids,
    cslFileContent,
}: GetHtmlCitationsByIdsProps) => {
    let parsedBibFile = parseBibFile(bibFileContent);

    let citations = new Cite(bibFileContent);

    if (cslFileContent) {
        let config = Cite.plugins.config.get("@csl");
        config?.templates.add("user-defined", cslFileContent);
    }

    const lowerCaseIds = ids.map((r) => r.toLowerCase());
    const entries = BibEntry.fromFsList(parsedBibFile.entries_raw);

    let connectOrCreateEntries: ResItem[] = [];

    for (const entry of entries) {
        const _args = entry.connectOrCreateArgs();
        _args.create.htmlCitation = citations.format("bibliography", {
            format: "html",
            template: Boolean(cslFileContent) ? "user-defined" : "apa",
            entry: entry.getIdInBibFile(ids, lowerCaseIds),
        });
        let pageIndex = lowerCaseIds.indexOf(_args.create.id.toLowerCase());
        if (pageIndex >= 0) {
            connectOrCreateEntries.push({
                ..._args.create,
                pageIndex,
            });
        }
    }
    return {
        citations: connectOrCreateEntries,
    };
};
