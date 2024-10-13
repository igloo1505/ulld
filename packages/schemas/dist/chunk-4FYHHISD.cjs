"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/BusinessContactWhereInputSchema.ts
var _zod = require('zod');
var BusinessContactWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BusinessContactWhereInputSchema), _zod.z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BusinessContactWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BusinessContactWhereInputSchema), _zod.z.lazy(() => BusinessContactWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  companyName: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactName: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactPreference: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  message: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var BusinessContactWhereInputSchema_default = BusinessContactWhereInputSchema;




exports.BusinessContactWhereInputSchema = BusinessContactWhereInputSchema; exports.BusinessContactWhereInputSchema_default = BusinessContactWhereInputSchema_default;
//# sourceMappingURL=chunk-4FYHHISD.cjs.map