"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/DefinitionScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DefinitionScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DefinitionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DefinitionScalarWhereWithAggregatesInputSchema_default = DefinitionScalarWhereWithAggregatesInputSchema;




exports.DefinitionScalarWhereWithAggregatesInputSchema = DefinitionScalarWhereWithAggregatesInputSchema; exports.DefinitionScalarWhereWithAggregatesInputSchema_default = DefinitionScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-RM4KAGYE.cjs.map