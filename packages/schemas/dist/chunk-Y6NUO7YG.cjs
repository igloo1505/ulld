"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ3HMBQQ5cjs = require('./chunk-Q3HMBQQ5.cjs');


var _chunk5UIYY6LGcjs = require('./chunk-5UIYY6LG.cjs');


var _chunkDAD7Z3LBcjs = require('./chunk-DAD7Z3LB.cjs');


var _chunkJHGFEBYPcjs = require('./chunk-JHGFEBYP.cjs');


var _chunkMWK7K6KQcjs = require('./chunk-MWK7K6KQ.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkQ3HMBQQ5cjs.DefinitionCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk5UIYY6LGcjs.DefinitionAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkDAD7Z3LBcjs.DefinitionMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkJHGFEBYPcjs.DefinitionMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkMWK7K6KQcjs.DefinitionSumOrderByAggregateInputSchema).optional()
}).strict();
var DefinitionOrderByWithAggregationInputSchema_default = DefinitionOrderByWithAggregationInputSchema;




exports.DefinitionOrderByWithAggregationInputSchema = DefinitionOrderByWithAggregationInputSchema; exports.DefinitionOrderByWithAggregationInputSchema_default = DefinitionOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-Y6NUO7YG.cjs.map