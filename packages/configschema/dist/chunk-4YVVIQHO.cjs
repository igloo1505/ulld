"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6QZ5W3RPcjs = require('./chunk-6QZ5W3RP.cjs');


var _chunkO5G4CUM4cjs = require('./chunk-O5G4CUM4.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');



var _chunkOUH2VSTLcjs = require('./chunk-OUH2VSTL.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunk6QZ5W3RPcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkO5G4CUM4cjs.jupyterConfigSchemaOutput,
  code: _chunkBCQTQSGVcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkOUH2VSTLcjs.internalDocumentTypeConfigSchema.array().parse(_chunkOUH2VSTLcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-4YVVIQHO.cjs.map