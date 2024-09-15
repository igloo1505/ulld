import { getParsedMdxContent } from "./getParsedBibContentAndCitations.ts";
import { getHtmlCitationsByIds } from "./getHtmlCitationsById.ts";
import { formatCitation } from "./formatCitation";

interface ParseCitationsFromStringAndBibFileProps {
    content: string;
    bibFileContent: string;
    cslFileContent?: string;
}


export const parseCitationsFromStringAndBibFile = ({
    content: _content,
    bibFileContent,
    cslFileContent,
}: ParseCitationsFromStringAndBibFileProps) => {
    let { content, results } = getParsedMdxContent(_content);

    let res = getHtmlCitationsByIds({
        bibFileContent,
        ids: results.map((x) => x.value),
        cslFileContent,
    });

    const citationsListOrder = results
        .sort((a: any, b: any) => a.index - b.index)
        .map((c) => c.value.toLowerCase());

    return {
        content,
        citations: res.citations,
        citationsListOrder,
    };
};

export {formatCitation}

