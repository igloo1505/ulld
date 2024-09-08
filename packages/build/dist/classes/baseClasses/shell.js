import cp from "child_process";
import chalk from "chalk";
const packageManagerExecution = {
    npm: "npm run",
    yarn: "yarn run",
    pnpm: "pnpm run",
};
export class ShellManager {
    logLevel = "normal";
    logLevelOrder = ["normal", "verbose", "debug"];
    constructor() {
        if (process.env.ULLD_LOG_LEVEL &&
            this.logLevelOrder.includes(process.env.ULLD_LOG_LEVEL)) {
            this.logLevel = process.env.ULLD_LOG_LEVEL;
        }
    }
    tempFiles = [];
    shouldLog(level) {
        return (this.logLevelOrder.indexOf(this.logLevel) >=
            this.logLevelOrder.indexOf(level));
    }
    logFixme(val, ...vals) {
        console.log(chalk.bgBlue.whiteBright(val, ...vals));
    }
    log(val, ...vals) {
        console.log(val, ...vals);
    }
    logDebug(val, ...vals) {
        if (!this.shouldLog("debug"))
            return;
        console.log(val, ...vals);
    }
    logVerbose(val, ...vals) {
        if (!this.shouldLog("verbose"))
            return;
        console.log(val, ...vals);
    }
    logError(val, ...vals) {
        console.error(val, ...vals);
    }
    logWarn(val, ...vals) {
        console.warn(val, ...vals);
    }
    logTable(val, ...vals) {
        console.table(val, ...vals);
    }
    logTrace(val, ...vals) {
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
    execLogger(error, stdout, stderr) { }
    execAsync(val, cwd, logger) {
        return cp.exec(val, { cwd }, logger || this.execLogger);
    }
    exec(val, cwd) {
        return cp.execSync(val, { cwd, stdio: "inherit" });
    }
    execPackageJsonScriptAsync(pkgManager, script, cwd, logger) {
        return this.execAsync(`${packageManagerExecution[pkgManager]} ${script}`, cwd, logger);
    }
    execPackageJsonScript(pkgManager, script, cwd) {
        return this.exec(`${packageManagerExecution[pkgManager]} ${script}`, cwd);
    }
}
