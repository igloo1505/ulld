import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/parser.ts
init_esm_shims();
var PluginParser = class {
  constructor(parserType, data, paths) {
    this.parserType = parserType;
    this.data = data;
    this.paths = paths;
    this.parserConfig = data.parsers[parserType];
    this.importName = `${parserType}Parser`;
  }
  parserConfig;
  importName;
  applyIndex(idx) {
    this.importName = `${this.importName}_${idx}`;
  }
  getImportString() {
    return `import ${this.importName} from "${this.data.pluginName}/${this.parserConfig?.export}";`;
  }
};

export {
  PluginParser
};
//# sourceMappingURL=chunk-TDC6F2KC.js.map