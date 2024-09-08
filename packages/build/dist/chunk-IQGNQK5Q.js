import {
  NoteType
} from "./chunk-BJVLOFCB.js";
import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/appConfig.ts
init_esm_shims();
import fs from "fs";
import path from "path";
import enq from "enquirer";
import { log } from "console";
import chalk from "chalk";
var { prompt } = enq;
var UlldAppConfigManager = class extends ShellManager {
  constructor(targetDir, isLocalDev, paths) {
    super();
    this.targetDir = targetDir;
    this.isLocalDev = isLocalDev;
    this.paths = paths;
    let _env = process.env.ULLD_ADDITIONAL_SOURCES;
    if (_env) {
      let configEnv = path.join(_env, "appConfig.ulld.json");
      this.envConfigPath = {
        path: configEnv,
        exists: fs.existsSync(configEnv)
      };
    }
    this.directoryConfigPathTemplate = path.join(
      targetDir,
      "appConfig.ulld.json"
    );
    this.directoryConfigPath = {
      path: this.directoryConfigPathTemplate,
      exists: fs.existsSync(this.directoryConfigPathTemplate)
    };
    this.preferredConfig = Boolean(
      this.envConfigPath && this.envConfigPath.exists
    ) ? "env" : "directory";
    this.exists = Boolean(
      this.envConfigPath && this.envConfigPath.exists || this.directoryConfigPath && this.directoryConfigPath.exists
    );
  }
  _config;
  preferredConfig;
  exists = true;
  envConfigPath;
  directoryConfigPath;
  selectedConfig;
  directoryConfigPathTemplate;
  get config() {
    return this._config;
  }
  set config(data) {
    this._config = data;
  }
  gather(setConfig = true) {
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
      let data = JSON.parse(d);
      if (setConfig) {
        this.config = data;
      }
      this.log(
        `Successfully gathered ${chalk.hex("#0ba5e9")("U")}LLD appConfig data.`
      );
      return data;
    }
  }
  checkDirectoryConfig() {
    let dirPath = path.join(this.targetDir, "appConfig.ulld.json");
    let exists = fs.existsSync(dirPath);
    this.directoryConfigPath = {
      path: dirPath,
      exists
    };
    return exists;
  }
  getConfigPath() {
    if (this.preferredConfig === "env" && this.envConfigPath?.exists) {
      return this.envConfigPath.path;
    }
    if (this.directoryConfigPath?.path && fs.existsSync(this.directoryConfigPath.path)) {
      return this.directoryConfigPath.path;
    }
  }
  getValidConfigPaths() {
    return [this.envConfigPath, this.directoryConfigPath].filter(
      (j) => j?.exists
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
        name: "selectedConfig"
      });
      if ("selectedConfig" in selectedPath && selectedPath.selectedConfig) {
        this.selectedConfig = selectedPath.selectedConfig;
        return selectedPath.selectedConfig;
      }
    }
    this.selectedConfig = configPaths[0]?.path;
    return configPaths[0]?.path;
  }
  foundMultiple() {
    return this.getValidConfigPaths().length > 1;
  }
  getNoteTypes() {
    if (!this.config) {
      throw new Error(`No config was found while gathering NoteType classes.`);
    }
    return this.config.noteTypes.map((t) => new NoteType(t, this.paths));
  }
  // TODO:
  // getCss(): string {}
};

export {
  UlldAppConfigManager
};
//# sourceMappingURL=chunk-IQGNQK5Q.js.map