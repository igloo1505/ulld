"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/ReadingListScalarWhereInputSchema.ts
var _zod = require('zod');
var ReadingListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereInputSchema), _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereInputSchema), _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereInputSchema_default = ReadingListScalarWhereInputSchema;




exports.ReadingListScalarWhereInputSchema = ReadingListScalarWhereInputSchema; exports.ReadingListScalarWhereInputSchema_default = ReadingListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-54Y7O4A2.cjs.map