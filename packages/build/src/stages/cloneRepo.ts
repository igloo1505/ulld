import { appData } from "@ulld/utilities/appData";
import {
    simpleGit,
    SimpleGitOptions,
    SimpleGit,
    SimpleGitProgressEvent,
} from "simple-git";
import { MultiBar, SingleBar } from "cli-progress";
import colors from "ansi-colors";
let stages: string[] = [];
let bars: MultiBar | null = null;
let remoteBar: SingleBar | null = null;
let receivingBar: SingleBar | null = null;

const progress = ({
    method,
    stage,
    progress,
    ...props
}: SimpleGitProgressEvent) => {
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
};

export const cloneBaseRepo = async (targetDirectory: string) => {
    const options: Partial<SimpleGitOptions> = {
        binary: "git",
        maxConcurrentProcesses: 10,
        trimmed: false,
        progress,
    };
    const git: SimpleGit = simpleGit(options);
    await git.clone(
        appData.templateRepo.url,
        `${targetDirectory}/ulldApp`,
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
    return true;
};

export const updateBaseRepo = async (targetDirectory: string) => {
    const options: Partial<SimpleGitOptions> = {
        baseDir: targetDirectory,
        binary: "git",
        maxConcurrentProcesses: 10,
        trimmed: false,
        progress,
    };
    const git: SimpleGit = simpleGit(options);

    await git.pull();

    return true;
};
