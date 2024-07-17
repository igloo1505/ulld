import cp from "child_process";
import chalk from "chalk";

type LogLevel = "normal" | "verbose" | "debug";


export class ShellManager {
    logLevel: LogLevel = "normal"
    private logLevelOrder: LogLevel[] = ["normal", "verbose", "debug"];
    constructor() {
        if (process.env.ULLD_LOG_LEVEL && this.logLevelOrder.includes(process.env.ULLD_LOG_LEVEL as any)) {
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
        console.log(chalk.bgBlueBright.whiteBright(val, ...vals))
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

    // TODO: Handle this and route all shell commands through here
    async exec(val: string, cwd?: string) {
        cp.execSync(val, { cwd, stdio: "inherit" });
    }
}
