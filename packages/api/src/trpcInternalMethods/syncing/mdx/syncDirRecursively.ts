import { syncMdx, SyncMdxProps } from "./syncMdx";
import { shouldIgnorePath } from "../../../trpcInternalMethods/filesystem/shouldIgnoreFilepath";
import { globSync } from "glob";
import { prisma } from "@ulld/database";

export type UniversalMdxProps = Omit<SyncMdxProps, "file" | "dir" | "docTypeData">;


export const syncDirRecursively = async (props: UniversalMdxProps) => {
        let allNotes = await prisma.mdxNote.findMany({
            select: {
                rootRelativePath: true,
                id: true,
                noteType: true
            }
        })
    allNotes = allNotes.sort((a, b) => b.rootRelativePath.length - a.rootRelativePath.length)
    let filePaths = globSync("**/*.mdx", {
        cwd: props.appConfig.fsRoot,
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

    for await (const file of filePaths) {
        const shouldIgnore = shouldIgnorePath(file, props.appConfig.ignoreFilepaths);
        let rootRelativePath = file.split(props.appConfig.fsRoot)[1];
        let docTypeId = allNotes.find((f) => file.includes(f.rootRelativePath))?.noteType
        let docTypeData: SyncMdxProps["docTypeData"] = {}
        if(docTypeId){
            docTypeData = props.appConfig.noteTypes.find((f) => f.id === docTypeId) || {}
        }
        if (rootRelativePath.endsWith(".mdx") && !shouldIgnore) {
            let _index = existingNotePaths.indexOf(rootRelativePath);
            if (_index >= 0) {
                existingNotePaths[_index] = false;
            }
            await syncMdx({
                ...props,
                file: file,
                dir: props.appConfig.fsRoot,
                docTypeData
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
