"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4OY4G2IEcjs = require('./chunk-4OY4G2IE.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DJTOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DJTOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk4OY4G2IEcjs.DJTOrderByRelevanceInputSchema).optional()
}).strict();
var DJTOrderByWithRelationInputSchema_default = DJTOrderByWithRelationInputSchema;




exports.DJTOrderByWithRelationInputSchema = DJTOrderByWithRelationInputSchema; exports.DJTOrderByWithRelationInputSchema_default = DJTOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-ZUHXBC56.cjs.map