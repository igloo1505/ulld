"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk76MVLTRYcjs = require('./chunk-76MVLTRY.cjs');


var _chunkUFNRIBN3cjs = require('./chunk-UFNRIBN3.cjs');

// src/zod/searchParamOverrides/main.ts
var _zod = require('zod');
var fields = {
  colab: _zod.z.coerce.boolean(),
  kernel: _zod.z.string(),
  nbgrader: _zod.z.coerce.boolean(),
  nbReadOnly: _zod.z.coerce.boolean(),
  nbConvertExec: _zod.z.coerce.boolean(),
  nbConvertTemp: _chunk76MVLTRYcjs.nbConvertTemplateOptions,
  shikiHlLight: _chunkUFNRIBN3cjs.shikiThemeValidator,
  shikiHlDark: _chunkUFNRIBN3cjs.shikiThemeValidator
};
var configSearchParamOverrideSchema = _zod.z.object(fields).partial();
var applyConfigOverrideMap = {
  colab: (baseConfig, override) => {
    if (override.colab) {
      baseConfig.jupyter.jupyterReactProps.collaborative = true;
    }
    return baseConfig;
  },
  kernel: (baseConfig, override) => {
    if (override.kernel) {
      baseConfig.jupyter.kernel = override.kernel;
    }
    return baseConfig;
  },
  nbgrader: (baseConfig, override) => {
    if (override.nbgrader) {
      baseConfig.jupyter.jupyterNotebookProps.nbgrader = override.nbgrader;
    }
    return baseConfig;
  },
  nbReadOnly: (baseConfig, override) => {
    if (override.nbReadOnly) {
      baseConfig.jupyter.jupyterNotebookProps.readOnly = override.nbReadOnly;
    }
    return baseConfig;
  },
  nbConvertExec: (baseConfig, override) => {
    if (override.nbConvertExec) {
      baseConfig.jupyter.nbConvert.execute = override.nbConvertExec;
    }
    return baseConfig;
  },
  nbConvertTemp: (baseConfig, override) => {
    if (override.nbConvertTemp) {
      baseConfig.jupyter.nbConvert.nbConvertTemplate = override.nbConvertTemp;
    }
    return baseConfig;
  },
  shikiHlDark: (baseConfig, override) => {
    if (override.shikiHlDark) {
      baseConfig.code.theme.dark = override.shikiHlDark;
    }
    return baseConfig;
  },
  shikiHlLight: (baseConfig, override) => {
    if (override.shikiHlLight) {
      baseConfig.code.theme.light = override.shikiHlLight;
    }
    return baseConfig;
  }
};




exports.configSearchParamOverrideSchema = configSearchParamOverrideSchema; exports.applyConfigOverrideMap = applyConfigOverrideMap;
//# sourceMappingURL=chunk-4R553QM5.cjs.map