"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DefinitionScalarWhereInputSchema.ts
var _zod = require('zod');
var DefinitionScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereInputSchema), _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereInputSchema), _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DefinitionScalarWhereInputSchema_default = DefinitionScalarWhereInputSchema;




exports.DefinitionScalarWhereInputSchema = DefinitionScalarWhereInputSchema; exports.DefinitionScalarWhereInputSchema_default = DefinitionScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-SPSBIYNQ.cjs.map