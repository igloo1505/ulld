import { syncMdx, SyncMdxProps } from "./syncMdx";
import { globSync } from "glob";
import { prisma } from "@ulld/database";
import path from "path";
import {
    sortNoteTypeDataForParsing,
    getNoteTypeDataFromPath,
} from "@ulld/utilities/mdxParserUtils";

export type UniversalMdxProps = Omit<
    SyncMdxProps,
    "file" | "dir" | "docTypeData" | "bookmarked" | "rootRelativePath"
>;

export const syncDirRecursively = async (props: UniversalMdxProps) => {
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

    let filePaths = globSync("**/*.mdx", {
        cwd: props.appConfig.fsRoot,
        nodir: true,
        ignore: props.appConfig.ignoreFilepaths.map((x) => x.original),
    });

    let existingNotePaths: (string | false)[] = [];
    if (props.opts.removeIfNotInFs) {
        let an = await props.prisma.mdxNote.findMany({
            select: {
                rootRelativePath: true,
            },
        });
        existingNotePaths = an.map((n) => n.rootRelativePath);
    }

    let noteTypeIds = sortNoteTypeDataForParsing(props.appConfig);

    for await (const rootRelativePath of filePaths) {
        const absPath = path.join(props.appConfig.fsRoot, rootRelativePath);

        let docTypeData = getNoteTypeDataFromPath(
            rootRelativePath,
            props.appConfig,
            noteTypeIds,
        );

        if (!docTypeData) {
            console.error(`Can not save ${absPath}. No document type was found.`);
        } else {
            if (rootRelativePath.endsWith(".mdx")) {
                let _index = existingNotePaths.indexOf(rootRelativePath);
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
