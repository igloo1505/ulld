"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/SubjectScalarWhereInputSchema.ts
var _zod = require('zod');
var SubjectScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereInputSchema), _zod.z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SubjectScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereInputSchema), _zod.z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SubjectScalarWhereInputSchema_default = SubjectScalarWhereInputSchema;




exports.SubjectScalarWhereInputSchema = SubjectScalarWhereInputSchema; exports.SubjectScalarWhereInputSchema_default = SubjectScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-DLSPXH2L.cjs.map