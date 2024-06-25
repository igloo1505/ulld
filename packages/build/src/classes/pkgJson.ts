import fs from "fs";
import path from "path";
import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { PackageManagers } from "../types";
import { ShellManager } from "./baseClasses/shell";
import { Prompter } from "./prompter";

const installScripts: {
    [k in PackageManagers]: string;
} = {
    pnpm: "pnpm install",
    npm: "npm install", // Double check this. Not too sure if this will work.
    yarn: "yarn install", // Almost surely wrong. Figure this out when back on wifi and able to reinstall yarn and figure out this f---king pnpm issue.
};

export class TargetPackageJson extends Prompter {
    data?: PackageJsonType;
    path: string;
    constructor(
        public targetDir: string,
        public isLocalDev: boolean,
    ) {
        super(targetDir);
        this.path = path.join(targetDir, "package.json");
    }
    gather() {
        if (fs.existsSync(this.path)) {
            let pkg = fs.readFileSync(this.path, { encoding: "utf-8" });
            this.data = JSON.parse(pkg) as PackageJsonType;
        }
    }
    exists() {
        return fs.existsSync(this.path);
    }
    includesUlldDependencies(): boolean {
        if (!this.data) {
            return false;
        }
        let deps = Object.keys(this.data.dependencies);
        console.log("deps: ", deps)
        return deps.filter((a) => a.startsWith("@ulld")).length > 0;
    }
    write() {
        this.log(`Writing your modified package.json...`);
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), {
            encoding: "utf-8",
        });
        this.log(`Wrote modified package.json successfully.`);
    }

    // ULLD_BUILD_PROCESS: Need to handle this.
    // TODO: Need to handle this. Can't do shit without wifi right now.
    async installDependencies() {
        let manager = await this.promptForPackageManager();
        if (!manager) {
            console.log(`Could not find a preferred package manager. Exiting.`)
            process.exit(1)
        }
        this.log(`Downloading dependencies with ${manager}`);
        this.log(`This might take a minute... Now's the time to get some coffee.`)
        this.exec(`${manager} install`, this.targetDir);
        console.log(`Whew! Installed everything we need to wrap this up...`)
    }
}
