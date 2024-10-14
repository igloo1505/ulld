"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEERH6HTQcjs = require('./chunk-EERH6HTQ.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/IpynbUpdateManyArgsSchema.ts
var _zod = require('zod');
var IpynbUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema, _chunkEERH6HTQcjs.IpynbUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.IpynbWhereInputSchema.optional()
}).strict();
var IpynbUpdateManyArgsSchema_default = IpynbUpdateManyArgsSchema;




exports.IpynbUpdateManyArgsSchema = IpynbUpdateManyArgsSchema; exports.IpynbUpdateManyArgsSchema_default = IpynbUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-4FZV7KFJ.cjs.map