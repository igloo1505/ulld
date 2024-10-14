"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKJQAER44cjs = require('./chunk-KJQAER44.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _relevance: _zod.z.lazy(() => _chunkKJQAER44cjs.BusinessContactOrderByRelevanceInputSchema).optional()
}).strict();
var BusinessContactOrderByWithRelationInputSchema_default = BusinessContactOrderByWithRelationInputSchema;




exports.BusinessContactOrderByWithRelationInputSchema = BusinessContactOrderByWithRelationInputSchema; exports.BusinessContactOrderByWithRelationInputSchema_default = BusinessContactOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-2BH3YSQC.cjs.map