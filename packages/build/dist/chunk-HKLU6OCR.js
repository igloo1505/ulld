import {
  staticDevelopmentData_default
} from "./chunk-FXTP44KN.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/getInternalTailwindSources.ts
init_esm_shims();
import buildUtilityData from "@ulld/utilities/buildStaticData.json";
var getInternalTailwindSources = () => {
  let items = staticDevelopmentData_default.alwaysIncludedTailwindSources;
  for (const k of buildUtilityData.internalPackageNames) {
    if (!staticDevelopmentData_default.excludeFromInternalTailwindSources.includes(k)) {
      items.push(`./node_modules/${k}/src/**/*.{js,ts,tsx,jsx,mdx}`);
    }
  }
  return items;
};

export {
  getInternalTailwindSources
};
//# sourceMappingURL=chunk-HKLU6OCR.js.map