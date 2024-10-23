"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkYC67XZCLcjs = require('./chunk-YC67XZCL.cjs');


var _chunkTWSZCXZBcjs = require('./chunk-TWSZCXZB.cjs');


var _chunkI7JJRKXLcjs = require('./chunk-I7JJRKXL.cjs');


var _chunkQ445VJJQcjs = require('./chunk-Q445VJJQ.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkTWSZCXZBcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkI7JJRKXLcjs.jupyterConfigSchemaOutput,
  code: _chunkQ445VJJQcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkYC67XZCLcjs.internalDocumentTypeConfigSchema.array().parse(_chunkYC67XZCLcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-XMYNCCKR.cjs.map