import {
  nbConvertTemplateOptions
} from "./chunk-AZ3BL532.mjs";
import {
  shikiThemeValidator
} from "./chunk-UUFTJZTI.mjs";

// src/zod/searchParamOverrides/main.ts
import { z } from "zod";
var fields = {
  colab: z.coerce.boolean(),
  kernel: z.string(),
  nbgrader: z.coerce.boolean(),
  nbReadOnly: z.coerce.boolean(),
  nbConvertExec: z.coerce.boolean(),
  nbConvertTemp: nbConvertTemplateOptions,
  shikiHlLight: shikiThemeValidator,
  shikiHlDark: shikiThemeValidator
};
var configSearchParamOverrideSchema = z.object(fields).partial();
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

export {
  configSearchParamOverrideSchema,
  applyConfigOverrideMap
};
//# sourceMappingURL=chunk-6DFYGU2X.mjs.map