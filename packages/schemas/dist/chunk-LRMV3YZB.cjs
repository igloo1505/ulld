"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHS67XPP6cjs = require('./chunk-HS67XPP6.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkHS67XPP6cjs.AutoSettingOrderByRelevanceInputSchema).optional()
}).strict();
var AutoSettingOrderByWithRelationInputSchema_default = AutoSettingOrderByWithRelationInputSchema;




exports.AutoSettingOrderByWithRelationInputSchema = AutoSettingOrderByWithRelationInputSchema; exports.AutoSettingOrderByWithRelationInputSchema_default = AutoSettingOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-LRMV3YZB.cjs.map