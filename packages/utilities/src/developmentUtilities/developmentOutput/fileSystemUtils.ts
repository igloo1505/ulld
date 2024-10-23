import path from 'path'
import fs from 'fs'
import type { OutputToFileOpts } from "./types";


export abstract class DevelopmentOutputFSUtils {


    protected getOutputToFilePath(opts: OutputToFileOpts): string {
        if (opts.isAbsolutePath) {
            return opts.filePath;
        }
        if (!process.env.ULLD_DEV_ROOT) {
            throw new Error(
                `Cannot find ULLD_DEV_ROOT variable. Cannot continue in the DevelopmentOutput class.`,
            );
        }
        return path.join(process.env.ULLD_DEV_ROOT, opts.filePath);
    }


    outputToFile(content: string, opts?: OutputToFileOpts): void {
        if (!opts) {
            return;
        }
        fs.writeFileSync(this.getOutputToFilePath(opts), content, {
            encoding: "utf-8",
        });
    }
}
