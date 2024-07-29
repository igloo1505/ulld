import fs from "fs";
import { saveMdxNote } from "./saveMdxNote";
import { updateMdxNote } from "./updateMdx";
import {
    MdxNote,
    MdxNoteParseParams,
} from "../../../classes/prismaMdxRelations/MdxNote";
import { OnSyncOptions } from "@ulld/types";
import { PrismaClient, Prisma } from "@ulld/database";
import { AutoSettingWithRegex } from "../../../trpc/types";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { UnifiedMdxParser, UnifiedMdxParserParams } from "../../../types";

export interface SyncMdxProps {
    file: string;
    dir: string;
    autoSettings: AutoSettingWithRegex[];
    opts: Partial<OnSyncOptions>;
    appConfig: AppConfigSchemaOutput;
    buildData: BuildStaticDataOutput;
    unifiedMdxParser: UnifiedMdxParser;
    prisma: PrismaClient;
    docTypeData: UnifiedMdxParserParams["docTypeData"]
}

export const syncMdx = async ({
    file,
    dir,
    autoSettings,
    opts,
    appConfig,
    buildData,
    unifiedMdxParser,
    prisma,
    docTypeData
}: SyncMdxProps) => {
    const config = appConfig
    let s = fs.readFileSync(file, { encoding: "utf-8" });
    let mdxNoteParserParams: MdxNoteParseParams = {
        appConfig,
        parser: unifiedMdxParser,
        docTypeData
    };
    let note = await MdxNote.fromMdxString(
        { raw: s, rootRelativePath: file.split(dir)[1] },
        { getBookmarkState: true },
        mdxNoteParserParams,
    );

    await note.parse(mdxNoteParserParams);
    if (note.remoteUrl && note.trackRemote && opts?.offline !== false) {
        // There has to be a better way of doing this without parsing this twice, but the downside of parsing front matter separately every single time for the <1% of notes that are likely to be remote might be much worse.
        await note.populateFromRemote();
        await note.parse(mdxNoteParserParams);
    }

    let checkExistsArgs: Prisma.MdxNoteFindFirstArgs = {
        where: {
            OR: [
                { content: note.raw as string },
                { rootRelativePath: note.rootRelativePath as string },
            ],
        },
    };

    let exists = await prisma.mdxNote.findFirst(checkExistsArgs);
    if (exists && note.rootRelativePath !== exists.rootRelativePath) {
        note.setNoteType();
        note.rootRelativePath = exists.rootRelativePath;
    }

    if (exists !== null) {
        note.id = exists.id;
        return updateMdxNote(note, autoSettings, config);
    } else {
        return saveMdxNote(note, autoSettings, config);
    }
};
