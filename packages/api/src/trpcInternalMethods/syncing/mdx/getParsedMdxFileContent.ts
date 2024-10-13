import fs from "fs";
import path from "path";
import type { AppConfigSchemaDeepPartialOutput } from "@ulld/configschema/types";
import { parseMdxString } from "@ulld/parsers";
import {
    parseParamsSchema,
    type ParseParamsSchemaType,
} from "@ulld/schemas/mdx-parsing-params";
import { moveAndChangeExtension } from "@ulld/file-system-utils/methods-moveAndChangeExtension";
import type { WithRequired } from "@ulld/utilities/types";
import { MdxNote } from "../../../classes/prismaMdxRelations/MdxNote";
import {
    ComponentMapLabels,
    outputComponentMapIds,
    type OutputComponentMapIdsProps,
} from "./fileOutputHandling/componentMapOutput";
import type { SyncMdxProps } from "./syncMdx";
import { FrontMatterType } from "@ulld/schemas/frontMatter";

export type GetParsedMdxFileContent = Omit<
    SyncMdxProps,
    "autoSettings" | "buildData" | "prisma" | "appConfig"
> &
    Pick<OutputComponentMapIdsProps, "additionalComponents"> & {
        outputDir: string;
        metaDataDir?: string;
        appConfig: WithRequired<
            AppConfigSchemaDeepPartialOutput,
            "fsRoot" | "noteTypes"
        >;
    };

export interface GeneratedMdxNoteMetaDataJson extends ComponentMapLabels {
    frontMatter: FrontMatterType;
}

export const getParsedMdxFileContent = async ({
    file,
    outputDir,
    opts,
    appConfig,
    unifiedMdxParser,
    bookmarked,
    rootRelativePath,
    docTypeData,
    metaDataDir,
    additionalComponents = [],
}: GetParsedMdxFileContent): Promise<void> => {
    const fileContent = await fs.promises.readFile(file, { encoding: "utf-8" });

    const mdxNoteParserParams: ParseParamsSchemaType = {
        appConfig,
        parser: unifiedMdxParser,
        docTypeData,
    };

    const note = await MdxNote.fromMdxString(
        {
            raw: fileContent,
            rootRelativePath,
            bookmarked,
            docTypeData,
        },
        {},
        mdxNoteParserParams,
    );

    if (note.remoteUrl && note.trackRemote && opts.offline !== false) {
        await note.populateFromRemote();
        const parsedMdxParserParams = parseParamsSchema.parse(mdxNoteParserParams);
        await note.parse(parsedMdxParserParams);
    }
    const content = note.formatted || note.raw;
    if (!content) {
        throw new Error(`Could not parse content for mdx file ${rootRelativePath}`);
    }
    const parsed = await parseMdxString({
        content,
        appConfig,
    });
    const outputPathData = path.parse(path.join(outputDir, rootRelativePath));
    const outputPath = path.join(outputPathData.dir, `${outputPathData.name}.js`);

    if (!fs.existsSync(outputPathData.dir)) {
        fs.mkdirSync(outputPathData.dir, {
            recursive: true,
        });
    }

    await fs.promises.writeFile(outputPath, parsed, { encoding: "utf-8" });

    console.log(`Wrote ${rootRelativePath} to ${outputPath}...`);

    if (metaDataDir) {
        const mdxContent = note.formatted || note.raw;

        if (!mdxContent) {
            throw new Error(
                `Did not find any content in either the formatted or the raw field for note ${note.title}`,
            );
        }

        if(!note.rootRelativePath){
            throw new Error(`Receive a MdxNote class without a rootRelativePath field while attempting to write compiled notes to file system.`)
        }

        const metaDataOutputPath = moveAndChangeExtension({
            rootRelativePath: note.rootRelativePath,
            outputDir: metaDataDir,
            newExtension: ".json",
        });

        const { componentLabels } = outputComponentMapIds({
            mdxContent,
            opts: {},
            additionalComponents,
        });

        let noteMetaData: GeneratedMdxNoteMetaDataJson = {
            frontMatter: note.frontMatter || {},
            componentLabels,
        };

        await fs.promises.writeFile(metaDataOutputPath, JSON.stringify(noteMetaData, null, 2), {
            encoding: "utf-8"
        })
    }
};
