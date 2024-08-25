import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import fs from "fs";
import path from "path";
import enq from "enquirer";
import { NoteType } from "./noteType.js";
import { log } from "console";
import { ShellManager } from "./baseClasses/shell.js";
import chalk from "chalk";
import { TargetPaths } from "./paths.js";

const { prompt } = enq;

interface PathItem {
  path: string;
  exists: boolean;
}

export class UlldAppConfigManager extends ShellManager {
  _config?: AppConfigSchemaOutput;
  preferredConfig: "env" | "directory";
  exists: boolean = true;
  envConfigPath?: PathItem;
  directoryConfigPath?: PathItem;
  selectedConfig?: string;
  directoryConfigPathTemplate: string;
  constructor(
    public targetDir: string,
    public isLocalDev: boolean,
    public paths: TargetPaths,
  ) {
    super();
    let _env = process.env.ULLD_ADDITIONAL_SOURCES;
    if (_env) {
      let configEnv = path.join(_env, "appConfig.ulld.json");
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
  get config() {
    // if (!this._config) {
    //   let c = this.gather(false);
    //   this._config = c;
    //   return c;
    // }
    return this._config;
  }
  set config(data: AppConfigSchemaOutput | undefined) {
    this._config = data;
  }
  gather(setConfig: boolean = true): AppConfigSchemaOutput | undefined {
    console.log(`Looking for ${chalk.hex("#0ba5e9")("U")}LLD appConfig...`);
    let configPath = this.getConfigPath();
    if (!configPath || !fs.existsSync(configPath)) {
      log(`We couldn't a valid configuration file. Please add one to the app's directory at the path below and try again.

${this.targetDir}

`);
    }
    if (configPath) {
      this.log(`Parsing ${chalk.hex("#0ba5e9")("U")}LLD appConfig...`);
      let d = fs.readFileSync(configPath, { encoding: "utf-8" });
      let data = JSON.parse(d) as AppConfigSchemaOutput;
      if (setConfig) {
        this.config = data;
      }
      this.log(
        `Successfully gathered ${chalk.hex("#0ba5e9")("U")}LLD appConfig data.`,
      );
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
    if (this.preferredConfig === "env" && this.envConfigPath?.exists) {
      return this.envConfigPath.path;
    }
    if (
      this.directoryConfigPath?.path &&
      fs.existsSync(this.directoryConfigPath.path)
    ) {
      return this.directoryConfigPath.path;
    }
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
  getNoteTypes(): NoteType[] {
    if (!this.config) {
      throw new Error(`No config was found while gathering NoteType classes.`);
    }
    return this.config.noteTypes.map((t) => new NoteType(t, this.paths));
  }
  // TODO:
  // getCss(): string {}
}
