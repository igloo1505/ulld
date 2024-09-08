"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL354VGYEcjs = require('./chunk-L354VGYE.cjs');



var _chunk7YET3AMWcjs = require('./chunk-7YET3AMW.cjs');

// src/zod/getInternalConfig.ts
var getInternalConfig = (appConfig, searchParams) => {
  const xConfig = {
    parsableExtensions: [".mdx"],
    filetypeSpecificAppendices: _chunk7YET3AMWcjs.getFileTypeAppendices.call(void 0, [".mdx"]),
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
  let config = _chunkL354VGYEcjs.applySearchParamConfigOverride.call(void 0, appConfig, searchParams || {});
  let pe = _chunk7YET3AMWcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunk7YET3AMWcjs.getFileTypeAppendices.call(void 0, pe),
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
//# sourceMappingURL=chunk-44GQZNMZ.cjs.map