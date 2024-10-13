"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIHOIMCZ7cjs = require('./chunk-IHOIMCZ7.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SortOrderInputSchema.ts
var _zod = require('zod');
var SortOrderInputSchema = _zod.z.object({
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  nulls: _zod.z.lazy(() => _chunkIHOIMCZ7cjs.NullsOrderSchema).optional()
}).strict();
var SortOrderInputSchema_default = SortOrderInputSchema;




exports.SortOrderInputSchema = SortOrderInputSchema; exports.SortOrderInputSchema_default = SortOrderInputSchema_default;
//# sourceMappingURL=chunk-AOSVUJ7P.cjs.map