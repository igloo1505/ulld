"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZQA645J4cjs = require('./chunk-ZQA645J4.cjs');

// src/database/outputTypeSchemas/DietCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DietCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZQA645J4cjs.DietCreateManyInputSchema, _chunkZQA645J4cjs.DietCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietCreateManyAndReturnArgsSchema_default = DietCreateManyAndReturnArgsSchema;




exports.DietCreateManyAndReturnArgsSchema = DietCreateManyAndReturnArgsSchema; exports.DietCreateManyAndReturnArgsSchema_default = DietCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-G4P6FQWI.cjs.map