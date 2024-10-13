import fs from "fs";
import path from "path";
import { globSync } from "glob";
// import { parseMdxString } from "@ulld/parsers";
import { formatMdxString } from "@ulld/parsers/formatMdxString";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";
import { UnifiedMdxParser, UnifiedParserOfType } from "@ulld/api/types";
// import mdxParser_1 from "@ulld/bib-manager/parser";
// import mdxParser_2 from "@ulld/equations/parser";
// import mdxParser_3 from "@ulld/api/coreParser";
import { applyRecursiveMdxParsers } from "@ulld/api/applyRecursiveMdxParser";
import { MdxNote } from "@ulld/api/classes/prismaMdxRelations/mdxNote";

const mdxParserList: UnifiedParserOfType<"mdx">[] = [
    // mdxParser_1,
    // mdxParser_2,
    // mdxParser_3
]


const unifiedMdxParser: UnifiedMdxParser = async (
    props
) => {
    return await applyRecursiveMdxParsers(props, mdxParserList)
};

const contentPath = path.resolve(path.dirname(__filename), "../content");

const contentFiles = globSync("**/*.mdx", {
    cwd: contentPath,
    absolute: true,
    nodir: true,
});

// console.log("contentFiles: ", contentFiles)

const testFile = contentFiles[0];

const parseMdxFile = async (f: string = testFile) => {
    if (!fs.existsSync(f)) {
        throw new Error(
            `File ${f} does not exist. Cannot continue generating web content files.`,
        );
    }
    const fileContent = fs.readFileSync(f, { encoding: "utf-8" });
    const docConfig = documentTypeConfigSchema.parse({
                id: "webAppNote",
                docType: "webAppNote",
                filePathPattern: "NOT_NECESSARY_IN_WEB_APP",
                matchWeight: 50,
                fs: path.dirname(f),
                keywords: [],
                label: "Web App Note",
    })

    const props = {
        _opts: {
            noteTypeId: "webAppNote",
        },
        props: {
            raw: fileContent,
            bookmarked: false,
            docTypeData: docConfig,
        },
        parseParams: {
            appConfig: {
                fsRoot: contentPath
            },
            docTypeData: docConfig,
            parser: unifiedMdxParser
        }
    }

    const  note = await MdxNote.fromMdxString(
        props.props,
        props._opts,
        props.parseParams
        // props.parseParams as (typeof props.parseParams & {appConfig: AppConfigSchemaOutput, parser: (appConfig: UnifiedMdxParserParams) => Promise<FrontMatterType & Record<string, any>>}),
    );


    // let formatted = await formatMdxString();
    console.log("formatted: ", note)
    // let res = await parseMdxString({
    //     content: fileContent,
    // });
};

parseMdxFile()
