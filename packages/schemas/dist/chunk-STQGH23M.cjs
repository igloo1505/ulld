"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5T2E7QWBcjs = require('./chunk-5T2E7QWB.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DietaryItemCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5T2E7QWBcjs.DietaryItemCreateManyInputSchema, _chunk5T2E7QWBcjs.DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietaryItemCreateManyAndReturnArgsSchema_default = DietaryItemCreateManyAndReturnArgsSchema;




exports.DietaryItemCreateManyAndReturnArgsSchema = DietaryItemCreateManyAndReturnArgsSchema; exports.DietaryItemCreateManyAndReturnArgsSchema_default = DietaryItemCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-STQGH23M.cjs.map