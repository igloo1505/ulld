import {
  ConflictBaseClass
} from "./chunk-DX56BAVJ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/pageConflict.ts
init_esm_shims();
var PageConflict = class extends ConflictBaseClass {
  constructor(targetPath, plugins) {
    super();
    this.targetPath = targetPath;
    this.plugins = plugins;
  }
  getName() {
    return this.targetPath;
  }
  getSurveyPromptData() {
    return {
      type: "select",
      name: this.surveyKey,
      message: `Path: ${this.targetPath}`,
      choices: this.plugins.map((p) => p.pluginName)
    };
  }
  resolveSlotConflict(acceptedValue) {
    for (const k of this.plugins) {
      if (acceptedValue !== k.pluginName) {
        k.cancel();
      }
    }
  }
};

export {
  PageConflict
};
//# sourceMappingURL=chunk-RZQAGGNF.js.map