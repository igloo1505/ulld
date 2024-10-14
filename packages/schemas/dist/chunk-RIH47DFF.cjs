"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHZVDKVK4cjs = require('./chunk-HZVDKVK4.cjs');


var _chunkJRYBOYMNcjs = require('./chunk-JRYBOYMN.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/EquationCreateManyInputSchema.ts
var _zod = require('zod');
var EquationCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  equationId: _zod.z.string().optional().nullable(),
  title: _zod.z.string(),
  desc: _zod.z.string().optional().nullable(),
  content: _zod.z.string(),
  asPython: _zod.z.string().optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunkHZVDKVK4cjs.EquationCreatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkJRYBOYMNcjs.EquationCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var EquationCreateManyInputSchema_default = EquationCreateManyInputSchema;




exports.EquationCreateManyInputSchema = EquationCreateManyInputSchema; exports.EquationCreateManyInputSchema_default = EquationCreateManyInputSchema_default;
//# sourceMappingURL=chunk-RIH47DFF.cjs.map