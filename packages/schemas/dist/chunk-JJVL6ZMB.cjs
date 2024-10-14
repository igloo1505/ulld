"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkREELDSJLcjs = require('./chunk-REELDSJL.cjs');


var _chunk5ICBN4HXcjs = require('./chunk-5ICBN4HX.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  entries: _zod.z.lazy(() => _chunk5ICBN4HXcjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkREELDSJLcjs.CitationsGroupOrderByRelevanceInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithRelationInputSchema_default = CitationsGroupOrderByWithRelationInputSchema;




exports.CitationsGroupOrderByWithRelationInputSchema = CitationsGroupOrderByWithRelationInputSchema; exports.CitationsGroupOrderByWithRelationInputSchema_default = CitationsGroupOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-JJVL6ZMB.cjs.map