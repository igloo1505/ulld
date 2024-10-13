"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4FYHHISDcjs = require('./chunk-4FYHHISD.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/BusinessContactWhereUniqueInputSchema.ts
var _zod = require('zod');
var BusinessContactWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4FYHHISDcjs.BusinessContactWhereInputSchema), _zod.z.lazy(() => _chunk4FYHHISDcjs.BusinessContactWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4FYHHISDcjs.BusinessContactWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4FYHHISDcjs.BusinessContactWhereInputSchema), _zod.z.lazy(() => _chunk4FYHHISDcjs.BusinessContactWhereInputSchema).array()]).optional(),
  companyName: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactName: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  contactPreference: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  message: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict());
var BusinessContactWhereUniqueInputSchema_default = BusinessContactWhereUniqueInputSchema;




exports.BusinessContactWhereUniqueInputSchema = BusinessContactWhereUniqueInputSchema; exports.BusinessContactWhereUniqueInputSchema_default = BusinessContactWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-ZR7LYAPF.cjs.map