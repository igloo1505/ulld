"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKVIXCEBQcjs = require('./chunk-KVIXCEBQ.cjs');


var _chunkTOJXZHVYcjs = require('./chunk-TOJXZHVY.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');



var _chunkO6N75DITcjs = require('./chunk-O6N75DIT.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkKVIXCEBQcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkTOJXZHVYcjs.jupyterConfigSchemaOutput,
  code: _chunkBCQTQSGVcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkO6N75DITcjs.internalDocumentTypeConfigSchema.array().parse(_chunkO6N75DITcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-NT2ON4ZT.cjs.map