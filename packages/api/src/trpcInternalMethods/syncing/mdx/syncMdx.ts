import fs from "fs";
import type { UnifiedMdxParser } from "@ulld/schemas/types";
import {
    parseParamsSchema,
} from "@ulld/schemas/mdx-parsing-params";
import type { OnSyncOptions } from "@ulld/types";
import type { PrismaClient, Prisma } from "@ulld/database";
import type {
    AppConfigSchemaOutput,
    MinimalParsableAppConfigOutput
} from "@ulld/configschema/types";
import type { AutoSettingWithRegex } from "../../../trpc/types";
import { MdxNote } from "../../../classes/prismaMdxRelations/MdxNote";
import { saveMdxNote } from "./saveMdxNote";
import { updateMdxNote } from "./updateMdx";

export interface SyncMdxProps {
    file: string;
    rootRelativePath: string;
    bookmarked: boolean;
    autoSettings: AutoSettingWithRegex[];
    opts: Partial<OnSyncOptions>;
    appConfig: MinimalParsableAppConfigOutput;
    unifiedMdxParser: UnifiedMdxParser;
    prisma: PrismaClient;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number];
}

export const syncMdx = async ({
    file,
    autoSettings,
    opts,
    appConfig,
    unifiedMdxParser,
    prisma,
    bookmarked,
    rootRelativePath,
    docTypeData,
}: SyncMdxProps): Promise<
    ReturnType<typeof updateMdxNote | typeof saveMdxNote>
> => {
    const fileContent = await fs.promises.readFile(file, { encoding: "utf-8" });

    const mdxNoteParserParams = parseParamsSchema.parse({
        appConfig,
        parser: unifiedMdxParser,
        docTypeData,
    });

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
        // There has to be a better way of doing this without parsing this twice, but the downside of parsing front matter separately every single time for the <1% of notes that are likely to be remote might be much worse.
        await note.populateFromRemote();
        await note.parse(mdxNoteParserParams);
    }

    const OR: NonNullable<Prisma.MdxNoteFindFirstArgs["where"]>["OR"] = [];
    if (note.raw) {
        OR.push({ content: note.raw });
    }
    if (note.rootRelativePath) {
        OR.push({ rootRelativePath: note.rootRelativePath });
    }

    const checkExistsArgs: Prisma.MdxNoteFindFirstArgs = {
        where: {
            OR,
        },
    };

    const exists = await prisma.mdxNote.findFirst(checkExistsArgs);
    if (exists && note.rootRelativePath !== exists.rootRelativePath) {
        note.setNoteType(docTypeData);
        note.rootRelativePath = exists.rootRelativePath;
    }

    if (exists !== null) {
        note.id = exists.id;
        return updateMdxNote(note, autoSettings, appConfig);
    }

    return saveMdxNote(note, autoSettings, appConfig);
};
