"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIX5ZGEPMcjs = require('./chunk-IX5ZGEPM.cjs');

// src/database/outputTypeSchemas/DefinitionCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DefinitionCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIX5ZGEPMcjs.DefinitionCreateManyInputSchema, _chunkIX5ZGEPMcjs.DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyAndReturnArgsSchema_default = DefinitionCreateManyAndReturnArgsSchema;




exports.DefinitionCreateManyAndReturnArgsSchema = DefinitionCreateManyAndReturnArgsSchema; exports.DefinitionCreateManyAndReturnArgsSchema_default = DefinitionCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-Z6DOCJXI.cjs.map