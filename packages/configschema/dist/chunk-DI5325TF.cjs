"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRVD3PA6Ycjs = require('./chunk-RVD3PA6Y.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');

// src/zod/getInternalConfig.ts
var getInternalConfig = (appConfig, searchParams) => {
  const xConfig = {
    parsableExtensions: [".mdx"],
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, [".mdx"]),
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
  let config = _chunkRVD3PA6Ycjs.applySearchParamConfigOverride.call(void 0, appConfig, searchParams || {});
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
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



exports.getInternalConfig = getInternalConfig;
//# sourceMappingURL=chunk-DI5325TF.cjs.map