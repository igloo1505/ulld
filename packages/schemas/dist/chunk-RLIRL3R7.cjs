"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLKO42IZVcjs = require('./chunk-LKO42IZV.cjs');

// src/database/outputTypeSchemas/ServingCreateManyArgsSchema.ts
var _zod = require('zod');
var ServingCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLKO42IZVcjs.ServingCreateManyInputSchema, _chunkLKO42IZVcjs.ServingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyArgsSchema_default = ServingCreateManyArgsSchema;




exports.ServingCreateManyArgsSchema = ServingCreateManyArgsSchema; exports.ServingCreateManyArgsSchema_default = ServingCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-RLIRL3R7.cjs.map