"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk44KCARV5cjs = require('./chunk-44KCARV5.cjs');


var _chunkQ6W7WNM7cjs = require('./chunk-Q6W7WNM7.cjs');


var _chunkWFX3WPX4cjs = require('./chunk-WFX3WPX4.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/EquationOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var EquationOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  variableLegend: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  relatedValues: _zod.z.lazy(() => _chunkQ6W7WNM7cjs.RelatedValuesOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk44KCARV5cjs.EquationOrderByRelevanceInputSchema).optional()
}).strict();
var EquationOrderByWithRelationInputSchema_default = EquationOrderByWithRelationInputSchema;




exports.EquationOrderByWithRelationInputSchema = EquationOrderByWithRelationInputSchema; exports.EquationOrderByWithRelationInputSchema_default = EquationOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-TXRBUPFU.cjs.map