"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkORK3XHM3cjs = require('./chunk-ORK3XHM3.cjs');


var _chunkO5G4CUM4cjs = require('./chunk-O5G4CUM4.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');



var _chunkKI4J7RTUcjs = require('./chunk-KI4J7RTU.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkORK3XHM3cjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkO5G4CUM4cjs.jupyterConfigSchemaOutput,
  code: _chunkBCQTQSGVcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkKI4J7RTUcjs.internalDocumentTypeConfigSchema.array().parse(_chunkKI4J7RTUcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-B6ZHKTIT.cjs.map