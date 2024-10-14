"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/BusinessContactWhereInputSchema.ts
var _zod = require('zod');
var BusinessContactWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BusinessContactWhereInputSchema), _zod.z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BusinessContactWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BusinessContactWhereInputSchema), _zod.z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  companyName: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactName: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactPreference: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var BusinessContactWhereInputSchema_default = BusinessContactWhereInputSchema;




exports.BusinessContactWhereInputSchema = BusinessContactWhereInputSchema; exports.BusinessContactWhereInputSchema_default = BusinessContactWhereInputSchema_default;
//# sourceMappingURL=chunk-IYNN3UKQ.cjs.map