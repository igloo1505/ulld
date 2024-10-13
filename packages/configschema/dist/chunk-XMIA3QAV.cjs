"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkENBKTJRWcjs = require('./chunk-ENBKTJRW.cjs');


var _chunkTOJXZHVYcjs = require('./chunk-TOJXZHVY.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');



var _chunkYRKEHSSOcjs = require('./chunk-YRKEHSSO.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkENBKTJRWcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkTOJXZHVYcjs.jupyterConfigSchemaOutput,
  code: _chunkBCQTQSGVcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkYRKEHSSOcjs.internalDocumentTypeConfigSchema.array().parse(_chunkYRKEHSSOcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-XMIA3QAV.cjs.map