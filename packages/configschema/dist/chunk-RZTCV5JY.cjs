"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ3HOBR6Gcjs = require('./chunk-Z3HOBR6G.cjs');


var _chunkTOJXZHVYcjs = require('./chunk-TOJXZHVY.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');



var _chunkF26HMTKScjs = require('./chunk-F26HMTKS.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkZ3HOBR6Gcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkTOJXZHVYcjs.jupyterConfigSchemaOutput,
  code: _chunkBCQTQSGVcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkF26HMTKScjs.internalDocumentTypeConfigSchema.array().parse(_chunkF26HMTKScjs.internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "heif",
        "gif"
      ]
    }
  };
});



exports.secondaryConfigParse = secondaryConfigParse;
//# sourceMappingURL=chunk-RZTCV5JY.cjs.map