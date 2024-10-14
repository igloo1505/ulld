"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVTCHFPKRcjs = require('./chunk-VTCHFPKR.cjs');


var _chunkVD3LYJVPcjs = require('./chunk-VD3LYJVP.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/PracticeExamUpdateManyArgsSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVD3LYJVPcjs.PracticeExamUpdateManyMutationInputSchema, _chunkVTCHFPKRcjs.PracticeExamUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.PracticeExamWhereInputSchema.optional()
}).strict();
var PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema;




exports.PracticeExamUpdateManyArgsSchema = PracticeExamUpdateManyArgsSchema; exports.PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-UF3CDORY.cjs.map