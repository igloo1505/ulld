import {
  getCurrentDir,
  getDirectoryCompletionFromString
} from "./chunk-JU33PUUF.js";
import {
  UlldBuildProcess
} from "./chunk-UQ2S7D5Z.js";
import {
  getBuildDataOutputPath
} from "./chunk-2KBTFCVH.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/verifyDirectory.ts
init_esm_shims();
import chalk from "chalk";
import enq from "enquirer";
import fs from "fs";
import path from "path";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
import shellJs from "shelljs";
var { prompt } = enq;
var verifyDirectory = async (opts, branch = "main") => {
  const currentDir = getCurrentDir();
  if (opts.clean) {
    let buildOutputPath = getBuildDataOutputPath();
    let f = new JsonFile(buildOutputPath);
    if (f.exists()) {
      let content = f.getJsonContent();
      if (content.buildOutputPath) {
        shellJs.rm("-f -R", content.buildOutputPath);
        return new UlldBuildProcess(content.buildOutputPath.endsWith("/ulldApp") ? path.dirname(content.buildOutputPath) : content.buildOutputPath, branch);
      }
    }
  }
  if (opts.here) {
    return new UlldBuildProcess(currentDir, branch);
  }
  let useCurrentDir = await prompt({
    type: "confirm",
    name: "useCurrentDir",
    message: `You're currently in the ${currentDir} directory.
Is this where you'd like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
    initial: true
  });
  if ("useCurrentDir" in useCurrentDir && useCurrentDir.useCurrentDir) {
    return new UlldBuildProcess(currentDir, branch);
  }
  const newPath = await prompt({
    type: "autocomplete",
    name: "path",
    message: `Where would you like to build ${chalk.hex("#0ba5e9")("U")}LLD?`,
    choices: [],
    /* @ts-ignore */
    highlight: chalk.hex("#0ba5e9"),
    /* @ts-ignore */
    limit: 10,
    /* @ts-ignore */
    suggest: (data) => {
      return getDirectoryCompletionFromString(data).map((f) => ({ message: f, value: f }));
    }
    // initial: currentDir,
  });
  if (!newPath.path || !fs.existsSync(newPath.path)) {
    console.log(`You need to specify a directory to continue.`);
    process.exit(1);
  }
  return new UlldBuildProcess(newPath.path, branch);
};

export {
  verifyDirectory
};
//# sourceMappingURL=chunk-CFDKZMBK.js.map