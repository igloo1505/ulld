"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIX5ZGEPMcjs = require('./chunk-IX5ZGEPM.cjs');

// src/database/outputTypeSchemas/DefinitionCreateManyArgsSchema.ts
var _zod = require('zod');
var DefinitionCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIX5ZGEPMcjs.DefinitionCreateManyInputSchema, _chunkIX5ZGEPMcjs.DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyArgsSchema_default = DefinitionCreateManyArgsSchema;




exports.DefinitionCreateManyArgsSchema = DefinitionCreateManyArgsSchema; exports.DefinitionCreateManyArgsSchema_default = DefinitionCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-G2P42FFE.cjs.map