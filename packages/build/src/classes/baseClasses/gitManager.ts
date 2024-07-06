import { appData } from "@ulld/utilities/appData";
import { ShellManager } from "./shell";
import simpleGit, {
    SimpleGitOptions,
    SimpleGit,
    SimpleGitProgressEvent,
} from "simple-git";
import { MultiBar, SingleBar } from "cli-progress";

export class GitManager extends ShellManager {
    status: "notSent" | "pending" | "success" | "fail" = "notSent";
    showProgress: boolean = false
    constructor(public targetDirectory: string) {
        super();
    }
    progress({ method, stage, progress, ...props }: SimpleGitProgressEvent) {
        let bars: MultiBar | null = null;
        let remoteBar: SingleBar | null = null;
        let receivingBar: SingleBar | null = null;
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
        this.log(
            `It looks like a ${this.ulld()} project already exists in this directory. Let's just try to update it.`,
        );
        this.status = "pending";
        const options: Partial<SimpleGitOptions> = {
            binary: "git",
            maxConcurrentProcesses: 10,
            trimmed: false,
            progress: this.showProgress ? this.progress : undefined,
        };
        const git: SimpleGit = simpleGit(options);
        await git.clone(
            appData.templateRepo.url,
            `${this.targetDirectory}/ulldApp`,
            {
                // "-b": "main",
            },
            (err, data) => {
                if (err) {
                    console.error(err);
                }
                console.log(data);
            },
        );
        this.status = "success";
        return true;
    }

    async clone() {
        this.log(
            `Great! Give me a second to clone the ${this.ulld()} code base onto your machine. This might take a minute or two.`,
        );
        this.status = "pending";
        const options: Partial<SimpleGitOptions> = {
            binary: "git",
            maxConcurrentProcesses: 10,
            trimmed: false,
            progress: this.showProgress ? this.progress : undefined,
        };
        const git: SimpleGit = simpleGit(options);
        await git.clone(
            appData.templateRepo.url,
            `${this.targetDirectory}/ulldApp`,
            {
                // "-b": "main",
            },
            (err, data) => {
                if (err) {
                    console.error(err);
                }
                console.log(data);
            },
        );
        this.status = "success";
        return true;
    }
}
