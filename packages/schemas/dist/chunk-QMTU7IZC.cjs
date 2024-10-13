"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVVXS3RWAcjs = require('./chunk-VVXS3RWA.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _relevance: _zod.z.lazy(() => _chunkVVXS3RWAcjs.BusinessContactOrderByRelevanceInputSchema).optional()
}).strict();
var BusinessContactOrderByWithRelationInputSchema_default = BusinessContactOrderByWithRelationInputSchema;




exports.BusinessContactOrderByWithRelationInputSchema = BusinessContactOrderByWithRelationInputSchema; exports.BusinessContactOrderByWithRelationInputSchema_default = BusinessContactOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-QMTU7IZC.cjs.map