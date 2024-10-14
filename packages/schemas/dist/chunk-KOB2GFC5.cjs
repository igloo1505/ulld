"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAOCDQ3V5cjs = require('./chunk-AOCDQ3V5.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/DefinitionArgsSchema.ts
var _zod = require('zod');
var DefinitionArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkAOCDQ3V5cjs.DefinitionSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.DefinitionIncludeSchema).optional()
}).strict();
var DefinitionArgsSchema_default = DefinitionArgsSchema;




exports.DefinitionArgsSchema = DefinitionArgsSchema; exports.DefinitionArgsSchema_default = DefinitionArgsSchema_default;
//# sourceMappingURL=chunk-KOB2GFC5.cjs.map