"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNSGEG2O6cjs = require('./chunk-NSGEG2O6.cjs');

// src/database/outputTypeSchemas/DefinitionCreateManyArgsSchema.ts
var _zod = require('zod');
var DefinitionCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNSGEG2O6cjs.DefinitionCreateManyInputSchema, _chunkNSGEG2O6cjs.DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyArgsSchema_default = DefinitionCreateManyArgsSchema;




exports.DefinitionCreateManyArgsSchema = DefinitionCreateManyArgsSchema; exports.DefinitionCreateManyArgsSchema_default = DefinitionCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-NYTNPW42.cjs.map