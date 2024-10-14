"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk42TBHIIYcjs = require('./chunk-42TBHIIY.cjs');


var _chunk2RNJ2OOJcjs = require('./chunk-2RNJ2OOJ.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanbanOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lists: _zod.z.lazy(() => _chunk42TBHIIYcjs.KanBanListOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk2RNJ2OOJcjs.KanbanOrderByRelevanceInputSchema).optional()
}).strict();
var KanbanOrderByWithRelationInputSchema_default = KanbanOrderByWithRelationInputSchema;




exports.KanbanOrderByWithRelationInputSchema = KanbanOrderByWithRelationInputSchema; exports.KanbanOrderByWithRelationInputSchema_default = KanbanOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-AYLQOMLK.cjs.map