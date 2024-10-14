"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5T2E7QWBcjs = require('./chunk-5T2E7QWB.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateManyArgsSchema.ts
var _zod = require('zod');
var DietaryItemCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5T2E7QWBcjs.DietaryItemCreateManyInputSchema, _chunk5T2E7QWBcjs.DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietaryItemCreateManyArgsSchema_default = DietaryItemCreateManyArgsSchema;




exports.DietaryItemCreateManyArgsSchema = DietaryItemCreateManyArgsSchema; exports.DietaryItemCreateManyArgsSchema_default = DietaryItemCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-CO6FUWXI.cjs.map