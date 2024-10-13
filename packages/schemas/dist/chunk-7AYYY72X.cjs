"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ4JOCSBZcjs = require('./chunk-J4JOCSBZ.cjs');


var _chunk3ZHBM4SPcjs = require('./chunk-3ZHBM4SP.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanbanOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lists: _zod.z.lazy(() => _chunkJ4JOCSBZcjs.KanBanListOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk3ZHBM4SPcjs.KanbanOrderByRelevanceInputSchema).optional()
}).strict();
var KanbanOrderByWithRelationInputSchema_default = KanbanOrderByWithRelationInputSchema;




exports.KanbanOrderByWithRelationInputSchema = KanbanOrderByWithRelationInputSchema; exports.KanbanOrderByWithRelationInputSchema_default = KanbanOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-7AYYY72X.cjs.map