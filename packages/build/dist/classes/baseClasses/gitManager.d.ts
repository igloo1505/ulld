import type { SimpleGitProgressEvent } from "simple-git";
import { BranchValue } from "../../utils/options.js";
import { ShellManager } from "./shell.js";
export declare class GitManager extends ShellManager {
    targetDirectory: string;
    branch: BranchValue;
    status: "notSent" | "pending" | "success" | "fail";
    showProgress: boolean;
    constructor(targetDirectory: string, branch: BranchValue);
    progress({ method, stage, progress, ...props }: SimpleGitProgressEvent): void;
    gitPull(): Promise<boolean>;
    clone(): Promise<boolean>;
}
