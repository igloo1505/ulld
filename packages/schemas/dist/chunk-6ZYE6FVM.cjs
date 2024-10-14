"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNSGEG2O6cjs = require('./chunk-NSGEG2O6.cjs');

// src/database/outputTypeSchemas/DefinitionCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DefinitionCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNSGEG2O6cjs.DefinitionCreateManyInputSchema, _chunkNSGEG2O6cjs.DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyAndReturnArgsSchema_default = DefinitionCreateManyAndReturnArgsSchema;




exports.DefinitionCreateManyAndReturnArgsSchema = DefinitionCreateManyAndReturnArgsSchema; exports.DefinitionCreateManyAndReturnArgsSchema_default = DefinitionCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-6ZYE6FVM.cjs.map