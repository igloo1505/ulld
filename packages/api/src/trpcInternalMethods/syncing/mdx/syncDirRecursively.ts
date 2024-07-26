import { syncMdx, SyncMdxProps } from "./syncMdx";
import { shouldIgnorePath } from "../../../trpcInternalMethods/filesystem/shouldIgnoreFilepath";
import { globSync } from "glob";
import { prisma } from "@ulld/database/db";

export type UniversalMdxProps = Omit<SyncMdxProps, "file" | "dir">;

export const syncDirRecursively = async (props: UniversalMdxProps) => {

    let filePaths = globSync("**/*.mdx", {
        cwd: props.appConfig.fsRoot,
    });
    let existingNotePaths: (string | false)[] = [];
    if (props.opts.removeIfNotInFs) {
        let an = await prisma.mdxNote.findMany({
            select: {
                rootRelativePath: true,
            },
        });
        existingNotePaths = an.map((n) => n.rootRelativePath);
    }

    for await (const file of filePaths) {
        const shouldIgnore = shouldIgnorePath(file, props.appConfig.ignoreFilepaths);
        let rootRelativePath = file.split(props.appConfig.fsRoot)[1];
        if (rootRelativePath.endsWith(".mdx") && !shouldIgnore) {
            let _index = existingNotePaths.indexOf(rootRelativePath);
            if (_index >= 0) {
                existingNotePaths[_index] = false;
            }
            await syncMdx({
                ...props,
                file: file,
                dir: props.appConfig.fsRoot,
            });
        }
    }
    existingNotePaths = existingNotePaths.filter((f) => f);
    if (props.opts.removeIfNotInFs && existingNotePaths.length > 0) {
        for await (const k of existingNotePaths as string[]) {
            await prisma.mdxNote.delete({
                where: {
                    rootRelativePath: k,
                },
            });
        }
    }
};
