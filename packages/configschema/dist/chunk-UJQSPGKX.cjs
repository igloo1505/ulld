"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk56GHHGNJcjs = require('./chunk-56GHHGNJ.cjs');


var _chunkLE6CYVFHcjs = require('./chunk-LE6CYVFH.cjs');



var _chunk7YET3AMWcjs = require('./chunk-7YET3AMW.cjs');


var _chunkEDVEKMUScjs = require('./chunk-EDVEKMUS.cjs');



var _chunk6BGGFZLRcjs = require('./chunk-6BGGFZLR.cjs');

// src/zod/secondaryConfigParse/main.ts
var _zod = require('zod');
var secondaryConfigParse = _chunk56GHHGNJcjs.appConfigSchema.merge(_zod.z.object({
  jupyter: _chunkLE6CYVFHcjs.jupyterConfigSchemaOutput,
  code: _chunkEDVEKMUScjs.codeConfigSchemaOutput
})).transform((config) => {
  let pe = _chunk7YET3AMWcjs.getParsableExtensions.call(void 0, config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: _chunk7YET3AMWcjs.getFileTypeAppendices.call(void 0, pe),
    internalDocumentTypes: _chunk6BGGFZLRcjs.internalDocumentTypeConfigSchema.array().parse(_chunk6BGGFZLRcjs.internalDocumentTypes),
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
//# sourceMappingURL=chunk-UJQSPGKX.cjs.map