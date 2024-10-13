"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBYF6CSHZcjs = require('./chunk-BYF6CSHZ.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DJTOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkBYF6CSHZcjs.DJTOrderByRelevanceInputSchema).optional()
}).strict();
var DJTOrderByWithRelationInputSchema_default = DJTOrderByWithRelationInputSchema;




exports.DJTOrderByWithRelationInputSchema = DJTOrderByWithRelationInputSchema; exports.DJTOrderByWithRelationInputSchema_default = DJTOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-RGZZUMYG.cjs.map