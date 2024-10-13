"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZQA645J4cjs = require('./chunk-ZQA645J4.cjs');

// src/database/outputTypeSchemas/DietCreateManyArgsSchema.ts
var _zod = require('zod');
var DietCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZQA645J4cjs.DietCreateManyInputSchema, _chunkZQA645J4cjs.DietCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietCreateManyArgsSchema_default = DietCreateManyArgsSchema;




exports.DietCreateManyArgsSchema = DietCreateManyArgsSchema; exports.DietCreateManyArgsSchema_default = DietCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-BOH73D3D.cjs.map