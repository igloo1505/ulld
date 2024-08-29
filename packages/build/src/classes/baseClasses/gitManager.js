import { appData } from "@ulld/utilities/appData";
import * as simpleGit from "simple-git";
import { MultiBar } from "cli-progress";
import path from "path";
import { ShellManager } from "./shell.js";
export class GitManager extends ShellManager {
    constructor(targetDirectory, branch) {
        super();
        this.targetDirectory = targetDirectory;
        this.branch = branch;
        this.status = "notSent";
        this.showProgress = false;
    }
    progress({ method, stage, progress, ...props }) {
        let bars = null;
        let remoteBar = null;
        let receivingBar = null;
        if (!bars) {
            bars = new MultiBar({
                clearOnComplete: false,
                hideCursor: true,
                barCompleteChar: "\u2588",
                barIncompleteChar: "\u2591",
                format: " {bar} | {value}% ",
            });
            remoteBar = bars.create(100, 0);
            receivingBar = bars.create(100, 0);
        }
        if (stage === "remote:") {
            remoteBar?.update(progress);
        }
        if (stage === "receiving") {
            remoteBar?.update(100);
            receivingBar?.update(progress);
        }
    }
    async gitPull() {
        this.log(`It looks like a ${this.ulld()} project already exists in this directory. Let's just try to update it.`);
        this.status = "pending";
        const options = {
            binary: "git",
            maxConcurrentProcesses: 10,
            trimmed: false,
            progress: this.showProgress ? this.progress : undefined,
        };
        const git = simpleGit.default(options);
        await git.pull({
            "-C": this.targetDirectory,
        });
        // await git.pull(
        //     appData.templateRepo.url,
        //     `${this.targetDirectory}/ulldApp`,
        //     {
        //         // "-b": "main",
        //     },
        //     (err, data) => {
        //         if (err) {
        //             console.error(err);
        //         }
        //         console.log(data);
        //     },
        // );
        this.status = "success";
        return true;
    }
    async clone() {
        this.log(`Great! Give me a second to clone the ${this.ulld()} code base onto your machine. This might take a minute or two.`);
        this.status = "pending";
        const options = {
            binary: "git",
            maxConcurrentProcesses: 10,
            trimmed: false,
            progress: this.showProgress ? this.progress : undefined,
        };
        const git = simpleGit.default(options);
        await git.clone(appData.templateRepo.url, `${this.targetDirectory}/ulldApp`, {
            "--branch": this.branch,
        }, (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
        await git.raw("-C", path.join(this.targetDirectory, appData.templateRepo.buildDirName), "remote", "add", "ulld", appData.templateRepo.url);
        this.status = "success";
        return true;
    }
}
