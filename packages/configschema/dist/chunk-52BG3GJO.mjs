import {
  applySearchParamConfigOverride
} from "./chunk-NVEDGZKJ.mjs";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-PPLLPMHA.mjs";

// src/zod/getInternalConfig.ts
var getInternalConfig = (appConfig, searchParams) => {
  const xConfig = {
    parsableExtensions: [".mdx"],
    filetypeSpecificAppendices: getFileTypeAppendices([".mdx"]),
    // internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "gif"
      ]
    }
  };
  if (!appConfig) {
    return {
      ...xConfig
    };
  }
  let config = applySearchParamConfigOverride(appConfig, searchParams || {});
  let pe = getParsableExtensions(config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: getFileTypeAppendices(pe),
    // internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "gif"
      ]
    }
  };
};

export {
  getInternalConfig
};
//# sourceMappingURL=chunk-52BG3GJO.mjs.map