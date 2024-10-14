"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXH6M7YDZcjs = require('./chunk-XH6M7YDZ.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByWithRelationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkXH6M7YDZcjs.DailyFocusOrderByRelevanceInputSchema).optional()
}).strict();
var DailyFocusOrderByWithRelationInputSchema_default = DailyFocusOrderByWithRelationInputSchema;




exports.DailyFocusOrderByWithRelationInputSchema = DailyFocusOrderByWithRelationInputSchema; exports.DailyFocusOrderByWithRelationInputSchema_default = DailyFocusOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-VB5SDYGQ.cjs.map