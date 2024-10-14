"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHS62NEEPcjs = require('./chunk-HS62NEEP.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByWithRelationInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkHS62NEEPcjs.RandomImageOrderByRelevanceInputSchema).optional()
}).strict();
var RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema;




exports.RandomImageOrderByWithRelationInputSchema = RandomImageOrderByWithRelationInputSchema; exports.RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-NN2554HU.cjs.map