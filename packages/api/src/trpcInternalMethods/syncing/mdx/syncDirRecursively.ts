import { prisma } from "#/db";
import { AutoSettingWithRegex } from "#/trpc/routers/sync";
import { getInternalConfig } from "@ulld/config";
import { shouldIgnorePath } from "../filesystem/shouldIgnoreFilepath";
import fs from 'fs'
import path from 'path'
import { SyncOptions } from "#/schemas/syncing/syncOptions";
import { syncMdx } from "./syncMdx";

export const syncDirRecursively = async (dir: string, removeIfNotPresentInFs: boolean, autoSettings: AutoSettingWithRegex[], options?: SyncOptions) => {
    var walk = function(dir: string, done: (err?: NodeJS.ErrnoException, results?: string[]) => void) {
        let results: string[] = [];
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var i = 0;
            (function next() {
                var file = list[i++];
                if (!file) return done(undefined, results);
                file = path.resolve(dir, file);
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        walk(file, function(err, res) {
                            if (res) {
                                results = results.concat(res);
                            }
                            next();
                        });
                    } else {
                        results.push(file);
                        next();
                    }
                });
            })();
        });
    };

    return await new Promise((resolve, reject) => {
        const config = getInternalConfig()
        walk(dir, async (err, results) => {
            let allNotes: (string | false)[] = []
            if (removeIfNotPresentInFs) {
                let an = await prisma.mdxNote.findMany({
                    select: {
                        rootRelativePath: true
                    }
                })
                allNotes = an.map((n) => n.rootRelativePath)
            }
            if (!results) {
                console.log(`No results found.`)
                return
            }
            for (const file of results) {
                const shouldIgnore = shouldIgnorePath(file, config.ignoreFilepaths)
                let rootRelativePath = file.split(dir)[1]
                if (rootRelativePath.endsWith(".mdx") && !shouldIgnore) {
                    let _index = allNotes.indexOf(rootRelativePath)
                    if (_index >= 0) {
                        allNotes[_index] = false
                    }
                    await syncMdx(file, dir, autoSettings, options)
                }
            }
            allNotes = allNotes.filter((f) => f)
            if (removeIfNotPresentInFs && allNotes.length > 0) {
                for (const k of allNotes as string[]) {
                    await prisma.mdxNote.delete({
                        where: {
                            rootRelativePath: k
                        }
                    })
                }
            }
            resolve(undefined)
        })
    })
}
