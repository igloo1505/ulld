import { formatCitation, parseCitationsFromStringAndBibFile } from "@ulld/bib-manager/parseCitationsFromStringContent";
import fs from "fs";
import path from "path";

interface ParsedMdxResult extends Awaited<ReturnType<typeof parseCitations>> {
    content: string;
    body: string
}


const citationRegex = (id: string) => new RegExp(`/\[@(?<value>${id})\]`, "gm")

const parseCitations = async (content: string) => {
    let cslFilePath = path.join(process.cwd(), "aip.csl");
    let bibFilePath = path.join(process.cwd(), "citations.bib");
    let cslFileContent = await fs.promises.readFile(cslFilePath, {
        encoding: "utf-8",
    });
    let bibFileContent = await fs.promises.readFile(bibFilePath, {
        encoding: "utf-8",
    });
    return parseCitationsFromStringAndBibFile({
        content,
        cslFileContent,
        bibFileContent,
    });
};

/* TODO: Aborting this for now while still working on battery power and without a network connection. Come back and implement dynamic citaiton parsing on the website, without needing to compile the mdx at request time. */
export const parseMdxContent = async (
    content: string,
    body: string
): Promise<ParsedMdxResult> => {
    let res = await parseCitations(content)
    let bodyLines = body.split("\n")
    let splitBodyIndex = bodyLines.findIndex((l) => l.startsWith("mjx"))
    let b = body
    if (splitBodyIndex >= 0) {
        let _b = bodyLines.slice(0, splitBodyIndex).join("\n")
        for (const k of res.citations) {
            let _formattedCitation = formatCitation(k.id, k.pageIndex)
            _b = _b.replaceAll(citationRegex(k.id), _formattedCitation.replace("className", "class"))
        }
        b = [_b, ...bodyLines.slice(splitBodyIndex)].join("\n")
    } 

    return {
        content: res.content,
        body: b,
        citations: (res.citations || []),
        citationsListOrder: res.citationsListOrder || []
    };

};
