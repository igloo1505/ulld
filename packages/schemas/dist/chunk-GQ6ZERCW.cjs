"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDW4BJ2G5cjs = require('./chunk-DW4BJ2G5.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/DefinitionArgsSchema.ts
var _zod = require('zod');
var DefinitionArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkDW4BJ2G5cjs.DefinitionSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.DefinitionIncludeSchema).optional()
}).strict();
var DefinitionArgsSchema_default = DefinitionArgsSchema;




exports.DefinitionArgsSchema = DefinitionArgsSchema; exports.DefinitionArgsSchema_default = DefinitionArgsSchema_default;
//# sourceMappingURL=chunk-GQ6ZERCW.cjs.map