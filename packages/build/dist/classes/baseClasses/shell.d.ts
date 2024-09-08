import cp, { ExecException } from "child_process";
import { PackageManagers } from "../../types.js";
type LogLevel = "normal" | "verbose" | "debug";
type ExecLogger = (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void;
export declare class ShellManager {
    logLevel: LogLevel;
    private logLevelOrder;
    constructor();
    tempFiles: string[];
    shouldLog(level: LogLevel): boolean;
    logFixme(val: any, ...vals: any): void;
    log(val: any, ...vals: any): void;
    logDebug(val: any, ...vals: any): void;
    logVerbose(val: any, ...vals: any): void;
    logError(val: any, ...vals: any): void;
    logWarn(val: any, ...vals: any): void;
    logTable(val: any, ...vals: any): void;
    logTrace(val: any, ...vals: any): void;
    ulld(): string;
    clearLastTempFile(): void;
    private execLogger;
    execAsync(val: string, cwd?: string, logger?: ExecLogger): cp.ChildProcess;
    exec(val: string, cwd?: string): Buffer;
    execPackageJsonScriptAsync(pkgManager: PackageManagers, script: string, cwd?: string, logger?: ExecLogger): cp.ChildProcess;
    execPackageJsonScript(pkgManager: PackageManagers, script: string, cwd?: string): Buffer;
}
export {};
