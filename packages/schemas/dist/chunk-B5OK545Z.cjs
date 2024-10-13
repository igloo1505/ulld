"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRUXMI53Jcjs = require('./chunk-RUXMI53J.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/MdxNoteUpdateManyArgsSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema, _chunkRUXMI53Jcjs.MdxNoteUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema.optional()
}).strict();
var MdxNoteUpdateManyArgsSchema_default = MdxNoteUpdateManyArgsSchema;




exports.MdxNoteUpdateManyArgsSchema = MdxNoteUpdateManyArgsSchema; exports.MdxNoteUpdateManyArgsSchema_default = MdxNoteUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-B5OK545Z.cjs.map