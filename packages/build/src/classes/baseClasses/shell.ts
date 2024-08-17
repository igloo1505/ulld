import cp, { ExecException } from "child_process";
import chalk from "chalk";
import { PackageManagers } from "../../types.js";

type LogLevel = "normal" | "verbose" | "debug";

type ExecLogger = (
    error: ExecException | null,
    stdout: string | Buffer,
    stderr: string | Buffer,
) => void;

const packageManagerExecution: Record<PackageManagers, string> = {
    npm: "npm run",
    yarn: "yarn run",
    pnpm: "pnpm run",
};

export class ShellManager {
    logLevel: LogLevel = "normal";
    private logLevelOrder: LogLevel[] = ["normal", "verbose", "debug"];
    constructor() {
        if (
            process.env.ULLD_LOG_LEVEL &&
            this.logLevelOrder.includes(process.env.ULLD_LOG_LEVEL as any)
        ) {
            this.logLevel = process.env.ULLD_LOG_LEVEL as LogLevel;
        }
    }
    tempFiles: string[] = [];

    shouldLog(level: LogLevel) {
        return (
            this.logLevelOrder.indexOf(this.logLevel) >=
            this.logLevelOrder.indexOf(level)
        );
    }

    logFixme(val: any, ...vals: any) {
        console.log(chalk.bgBlue.whiteBright(val, ...vals));
    }

    log(val: any, ...vals: any) {
        console.log(val, ...vals);
    }

    logDebug(val: any, ...vals: any) {
        if (!this.shouldLog("debug")) return;
        console.log(val, ...vals);
    }

    logVerbose(val: any, ...vals: any) {
        if (!this.shouldLog("verbose")) return;
        console.log(val, ...vals);
    }

    logError(val: any, ...vals: any) {
        console.error(val, ...vals);
    }
    logWarn(val: any, ...vals: any) {
        console.warn(val, ...vals);
    }

    logTable(val: any, ...vals: any) {
        console.table(val, ...vals);
    }
    logTrace(val: any, ...vals: any) {
        console.trace(val, ...vals);
    }

    ulld() {
        return `${chalk.hex("#0ba5e9")("U")}LLD`;
    }

    // async genTempFile(content: string){
    //     let fileName  = "ulld_"
    //     Array(12).fill(0).forEach(() => fileName += validChars[Math.floor(Math.random() * validChars.length)])
    //     let tempDir = os.tmpdir()
    //     await fs.promises.writeFile(path.join(tempDir, ))
    // }

    clearLastTempFile() {
        if (this.tempFiles.length === 0) {
            return;
        }
        this.tempFiles = this.tempFiles.slice(0, this.tempFiles.length - 1);
    }
    private execLogger(
        error: ExecException | null,
        stdout: string | Buffer,
        stderr: string | Buffer,
    ) { }
    execAsync(val: string, cwd?: string, logger?: ExecLogger) {
        return cp.exec(val, { cwd }, logger || this.execLogger);
    }
    exec(val: string, cwd?: string) {
        return cp.execSync(val, { cwd, stdio: "inherit" });
    }
    execPackageJsonScriptAsync(
        pkgManager: PackageManagers,
        script: string,
        cwd?: string,
        logger?: ExecLogger
    ) {
        return this.execAsync(`${packageManagerExecution[pkgManager]} ${script}`, cwd, logger);
    }
    execPackageJsonScript(
        pkgManager: PackageManagers,
        script: string,
        cwd?: string,
    ) {
        return this.exec(`${packageManagerExecution[pkgManager]} ${script}`, cwd);
    }
}
