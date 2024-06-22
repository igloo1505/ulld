import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import fs from "fs";
import path from "path";
import { prompt } from "enquirer";
import { NoteType } from "./noteType";
import { log } from "console";
import { ShellManager } from "./baseClasses/shell";
import chalk from "chalk";

interface PathItem {
    path: string;
    exists: boolean;
}

export class UlldAppConfigManager extends ShellManager {
    config?: AppConfigSchemaOutput;
    preferredConfig: "env" | "directory";
    exists: boolean = true;
    envConfigPath?: PathItem;
    directoryConfigPath?: PathItem;
    selectedConfig?: string;
    directoryConfigPathTemplate: string;
    noteTypes: NoteType[] = []
    constructor(
        public targetDir: string,
        public isLocalDev: boolean,
    ) {
        super()
        let configEnv = process.env.ULLD_APP_CONFIG;
        if (configEnv) {
            this.envConfigPath = {
                path: configEnv,
                exists: fs.existsSync(configEnv),
            };
        }

        this.directoryConfigPathTemplate = path.join(
            targetDir,
            "appConfig.ulld.json",
        );
        this.directoryConfigPath = {
            path: this.directoryConfigPathTemplate,
            exists: fs.existsSync(this.directoryConfigPathTemplate),
        };
        this.preferredConfig = Boolean(
            this.envConfigPath && this.envConfigPath.exists,
        )
            ? "env"
            : "directory";
        this.exists = Boolean(
            (this.envConfigPath && this.envConfigPath.exists) ||
            (this.directoryConfigPath && this.directoryConfigPath.exists),
        );
    }
    gather(setConfig: boolean = true): AppConfigSchemaOutput | undefined {
        console.log(`Looking for ${chalk.hex("#0ba5e9")("U")}LLD appConfig...`)
        let configPath = this.getConfigPath();
        if(!configPath || !fs.existsSync(configPath)){
            log(`We couldn't a valid configuration file. Please add one to the app's directory at the path below and try again.

${this.targetDir}

`)
        }
        if (configPath) {
            this.log(`Parsing ${chalk.hex("#0ba5e9")("U")}LLD appConfig...`)
            let d = fs.readFileSync(configPath, { encoding: "utf-8" });
            let data = JSON.parse(d) as AppConfigSchemaOutput
            if (setConfig) {
                this.config = data;
            }
            this.noteTypes = data.noteTypes.map((f) => new NoteType(f))
            this.log(`Successfully gathered ${chalk.hex("#0ba5e9")("U")}LLD appConfig data.`)
            return data as AppConfigSchemaOutput;
        }
    }
    checkDirectoryConfig() {
        let dirPath = path.join(this.targetDir, "appConfig.ulld.json");
        let exists = fs.existsSync(dirPath);
        this.directoryConfigPath = {
            path: dirPath,
            exists: exists,
        };
        return exists;
    }
    getConfigPath() {
        return this.preferredConfig === "env"
            ? (this.envConfigPath?.path as string)
            : this.directoryConfigPath?.path;
    }
    getValidConfigPaths() {
        return [this.envConfigPath, this.directoryConfigPath].filter(
            (j) => j?.exists,
        );
    }
    async getSelectedConfigPath() {
        if (this.selectedConfig) {
            return this.selectedConfig;
        }
        let configPaths = this.getValidConfigPaths();
        if (configPaths.length > 1) {
            let selectedPath = await prompt({
                type: "select",
                /* @ts-ignore */
                options: configPaths.map((f) => ({ message: f, value: f })),
                name: "selectedConfig",
            });
            if ("selectedConfig" in selectedPath && selectedPath.selectedConfig) {
                this.selectedConfig = selectedPath.selectedConfig as string;
                return selectedPath.selectedConfig;
            }
        }
        this.selectedConfig = configPaths[0]?.path as string;
        return configPaths[0]?.path as string;
    }
    foundMultiple() {
        return this.getValidConfigPaths().length > 1;
    }
// TODO:
// getCss(): string {}
}
