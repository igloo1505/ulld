"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/ReadingListScalarWhereInputSchema.ts
var _zod = require('zod');
var ReadingListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereInputSchema), _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereInputSchema), _zod.z.lazy(() => ReadingListScalarWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereInputSchema_default = ReadingListScalarWhereInputSchema;




exports.ReadingListScalarWhereInputSchema = ReadingListScalarWhereInputSchema; exports.ReadingListScalarWhereInputSchema_default = ReadingListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-CBMFU45Q.cjs.map