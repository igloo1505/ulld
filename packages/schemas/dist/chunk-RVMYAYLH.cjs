"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6F5HCBP5cjs = require('./chunk-6F5HCBP5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByWithRelationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk6F5HCBP5cjs.DailyFocusOrderByRelevanceInputSchema).optional()
}).strict();
var DailyFocusOrderByWithRelationInputSchema_default = DailyFocusOrderByWithRelationInputSchema;




exports.DailyFocusOrderByWithRelationInputSchema = DailyFocusOrderByWithRelationInputSchema; exports.DailyFocusOrderByWithRelationInputSchema_default = DailyFocusOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-RVMYAYLH.cjs.map