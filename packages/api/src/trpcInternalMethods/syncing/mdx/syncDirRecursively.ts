import path from "path";
import { prisma } from "@ulld/database";
import { globSync } from "glob";
import {
    sortNoteTypeDataForParsing,
    getNoteTypeDataFromPath,
} from "@ulld/utilities/mdxParserUtils";
import { syncMdx } from "./syncMdx";
import type { SyncMdxProps } from "./syncMdx";

export type UniversalMdxProps = Omit<
    SyncMdxProps,
    "file" | "dir" | "docTypeData" | "bookmarked" | "rootRelativePath"
>;

export const syncDirRecursively = async (props: UniversalMdxProps): Promise<void> => {
    let allNotes = await prisma.mdxNote.findMany({
        select: {
            rootRelativePath: true,
            id: true,
            noteType: true,
            bookmarked: true,
        },
    });

    allNotes = allNotes.sort(
        (a, b) => b.rootRelativePath.length - a.rootRelativePath.length,
    );

    const filePaths = globSync("**/*.mdx", {
        cwd: props.appConfig.fsRoot,
        nodir: true,
        ignore: props.appConfig.ignoreFilepaths?.map((x) => x),
    });

    let existingNotePaths: (string | false)[] = [];
    if (props.opts.removeIfNotInFs) {
        const an = await props.prisma.mdxNote.findMany({
            select: {
                rootRelativePath: true,
            },
        });
        existingNotePaths = an.map((n) => n.rootRelativePath);
    }

    const noteTypeIds = sortNoteTypeDataForParsing(props.appConfig);

    for await (const rootRelativePath of filePaths) {
        const absPath = path.join(props.appConfig.fsRoot, rootRelativePath);

        const docTypeData = getNoteTypeDataFromPath(
            rootRelativePath,
            props.appConfig,
            noteTypeIds,
        );

        if (!docTypeData) {
            // eslint-disable-next-line no-console -- Need to log error. #MoveToLoggerPackage
            console.error(`Can not save ${absPath}. No document type was found.`);
        } else if (rootRelativePath.endsWith(".mdx")) {
                const _index = existingNotePaths.indexOf(rootRelativePath);
                if (_index >= 0) {
                    existingNotePaths[_index] = false;
                }
                await syncMdx({
                    ...props,
                    file: absPath,
                    docTypeData,
                    rootRelativePath,
                    bookmarked: Boolean(
                        allNotes.find((x) => x.rootRelativePath === rootRelativePath)
                            ?.bookmarked,
                    ),
                });
            }
    }

    existingNotePaths = existingNotePaths.filter((f) => f);

    if (props.opts.removeIfNotInFs && existingNotePaths.length > 0) {
        for await (const k of existingNotePaths as string[]) {
            await props.prisma.mdxNote.delete({
                where: {
                    rootRelativePath: k,
                },
            });
        }
    }
};
