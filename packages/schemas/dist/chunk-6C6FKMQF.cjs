"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3W3U32JIcjs = require('./chunk-3W3U32JI.cjs');


var _chunkSX3T5P2Qcjs = require('./chunk-SX3T5P2Q.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibUpdateManyArgsSchema.ts
var _zod = require('zod');
var BibUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk3W3U32JIcjs.BibUpdateManyMutationInputSchema, _chunkSX3T5P2Qcjs.BibUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.BibWhereInputSchema.optional()
}).strict();
var BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema;




exports.BibUpdateManyArgsSchema = BibUpdateManyArgsSchema; exports.BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-6C6FKMQF.cjs.map