"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLKO42IZVcjs = require('./chunk-LKO42IZV.cjs');

// src/database/outputTypeSchemas/ServingCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ServingCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLKO42IZVcjs.ServingCreateManyInputSchema, _chunkLKO42IZVcjs.ServingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema;




exports.ServingCreateManyAndReturnArgsSchema = ServingCreateManyAndReturnArgsSchema; exports.ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-STW54LBG.cjs.map