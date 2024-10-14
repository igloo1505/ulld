"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SubjectScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SubjectScalarWhereWithAggregatesInputSchema_default = SubjectScalarWhereWithAggregatesInputSchema;




exports.SubjectScalarWhereWithAggregatesInputSchema = SubjectScalarWhereWithAggregatesInputSchema; exports.SubjectScalarWhereWithAggregatesInputSchema_default = SubjectScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VWJWA46T.cjs.map