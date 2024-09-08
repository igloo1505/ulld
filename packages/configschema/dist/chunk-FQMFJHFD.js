import {
  applySearchParamConfigOverride
} from "./chunk-3DFOTVSS.js";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-UTZ6EIF3.js";

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
//# sourceMappingURL=chunk-FQMFJHFD.js.map