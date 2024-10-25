"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk5YN3525Pcjs = require('./chunk-5YN3525P.cjs');


var _chunkKWIRSSW7cjs = require('./chunk-KWIRSSW7.cjs');


var _chunkI7JJRKXLcjs = require('./chunk-I7JJRKXL.cjs');


var _chunkQ445VJJQcjs = require('./chunk-Q445VJJQ.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkKWIRSSW7cjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkI7JJRKXLcjs.jupyterConfigSchemaOutput,
  code: _chunkQ445VJJQcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunk5YN3525Pcjs.internalDocumentTypeConfigSchema.array().parse(_chunk5YN3525Pcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-JUE4ILEJ.cjs.map