import path from "node:path";
import { NextResponse } from "next/server";
import type { UnifiedMdxParser, UnifiedParserOfType } from "@ulld/api/types";
import mdxParser1 from "@ulld/bib-manager/parser";
import mdxParser2 from "@ulld/equations/parser";
import mdxParser3 from "@ulld/api/coreParser";
import { applyRecursiveMdxParsers } from "@ulld/api/applyRecursiveMdxParser";
import { syncOptionsSchema } from "@ulld/api/schemas/syncing/syncOptions";
import type { WriteParsedDirProps } from "@ulld/api/writeParsedDirToOutputDir";
import { writeParsedDirToFileSystem } from "@ulld/api/writeParsedDirToOutputDir";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";
import { serverComponentMap } from "#/mdx/serverComponentMap";

const mdxParserList: UnifiedParserOfType<"mdx">[] = [
    mdxParser1,
    mdxParser2,
    mdxParser3,
];

export const unifiedMdxParser: UnifiedMdxParser = async (props) => {
    return applyRecursiveMdxParsers(props, mdxParserList);
};

const fsRoot = path.resolve(process.cwd(), "./content");
const outputDir = path.resolve(process.cwd(), "./parsedContent/content");
const metaDataDir = path.resolve(process.cwd(), "./parsedContent/meta");

export async function GET(): Promise<NextResponse> {
    const appConfig: WriteParsedDirProps["appConfig"] = {
        fsRoot,
        noteTypes: [],
    };
    try {
        const parseProps: Parameters<typeof writeParsedDirToFileSystem>[0] = {
            opts: syncOptionsSchema.parse({}),
            appConfig,
            unifiedMdxParser,
            docTypeData: documentTypeConfigSchema.parse({
                id: "webAppNote",
                label: "Web Note",
                fs: fsRoot,
                url: "/",
            }),
           metaDataDir,
            outputDir,
            additionalComponents: serverComponentMap,
        };

        await writeParsedDirToFileSystem(parseProps);

        return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }), {
            status: 500,
        });
    }
}
