"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSDX5OO7Jcjs = require('./chunk-SDX5OO7J.cjs');


var _chunkJVGDFM2Kcjs = require('./chunk-JVGDFM2K.cjs');


var _chunkMGQZW2V6cjs = require('./chunk-MGQZW2V6.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/EquationOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var EquationOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  variableLegend: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  relatedValues: _zod.z.lazy(() => _chunkJVGDFM2Kcjs.RelatedValuesOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkMGQZW2V6cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkSDX5OO7Jcjs.EquationOrderByRelevanceInputSchema).optional()
}).strict();
var EquationOrderByWithRelationInputSchema_default = EquationOrderByWithRelationInputSchema;




exports.EquationOrderByWithRelationInputSchema = EquationOrderByWithRelationInputSchema; exports.EquationOrderByWithRelationInputSchema_default = EquationOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-6LJC2FE4.cjs.map