"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkQBGY2YZYcjs = require('./chunk-QBGY2YZY.cjs');


var _chunkIVOJNLXQcjs = require('./chunk-IVOJNLXQ.cjs');


var _chunkI7JJRKXLcjs = require('./chunk-I7JJRKXL.cjs');


var _chunkQ445VJJQcjs = require('./chunk-Q445VJJQ.cjs');



var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunkIVOJNLXQcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkI7JJRKXLcjs.jupyterConfigSchemaOutput,
  code: _chunkQ445VJJQcjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunkMQKT3OULcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunkMQKT3OULcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunkQBGY2YZYcjs.internalDocumentTypeConfigSchema.array().parse(_chunkQBGY2YZYcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-GRPMK4E2.cjs.map