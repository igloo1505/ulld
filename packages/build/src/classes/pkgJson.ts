import fs from "fs";
import path from "path";
import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { PackageManagers } from "../types";
import { ShellManager } from "./baseClasses/shell";
import { Prompter } from "./prompter";
import { PackageJson } from "./baseClasses/pkgJson";

const installScripts: {
    [k in PackageManagers]: string;
} = {
    pnpm: "pnpm install",
    npm: "npm install", // Double check this. Not too sure if this will work.
    yarn: "yarn install", // Almost surely wrong. Figure this out when back on wifi and able to reinstall yarn and figure out this f---king pnpm issue.
};

export class TargetPackageJson extends PackageJson {
    constructor(
        public targetDir: string,
        public isLocalDev: boolean,
    ) {
        super(targetDir);
    }
    includesUlldDependencies(): boolean {
        if (!this.data) {
            return false;
        }
        let deps = Object.keys(this.data.dependencies);
        return deps.filter((a) => a.startsWith("@ulld")).length > 0;
    }

    // ULLD_BUILD_PROCESS: Need to handle this.
    // TODO: Need to handle this. Can't do shit without wifi right now.
    async installDependencies(forceLocalSource?: boolean) {
        let manager = await this.promptForPackageManager();
        if (!manager) {
            console.log(`Could not find a preferred package manager. Exiting.`);
            process.exit(1);
        }
        if (forceLocalSource) {
            this.logDebug(`Applying local sources for development build.`)
            this.exec(
                `tsx /Users/bigsexy/Desktop/current/ulld/buildUtils/setClonedBaseAppInternalDepLocations.ts toLocal`,
            );
        }
        this.log(`Downloading dependencies with ${manager}`);
        this.log(`This might take a minute... Now's the time to get some coffee.`);
        this.exec(`${manager} install`, this.targetDir);
        this.log(`Whew! Installed everything we need to wrap this up...`);
    }
}
