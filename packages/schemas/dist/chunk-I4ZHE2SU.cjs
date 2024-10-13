"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHCGQ2ERVcjs = require('./chunk-HCGQ2ERV.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkHCGQ2ERVcjs.WaitlistRequestOrderByRelevanceInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithRelationInputSchema_default = WaitlistRequestOrderByWithRelationInputSchema;




exports.WaitlistRequestOrderByWithRelationInputSchema = WaitlistRequestOrderByWithRelationInputSchema; exports.WaitlistRequestOrderByWithRelationInputSchema_default = WaitlistRequestOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-I4ZHE2SU.cjs.map