"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTQKPMLWGcjs = require('./chunk-TQKPMLWG.cjs');


var _chunkGNGCDLLMcjs = require('./chunk-GNGCDLLM.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tasks: _zod.z.lazy(() => _chunkGNGCDLLMcjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkTQKPMLWGcjs.ToDoListOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoListOrderByWithRelationInputSchema_default = ToDoListOrderByWithRelationInputSchema;




exports.ToDoListOrderByWithRelationInputSchema = ToDoListOrderByWithRelationInputSchema; exports.ToDoListOrderByWithRelationInputSchema_default = ToDoListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-F22WIE72.cjs.map