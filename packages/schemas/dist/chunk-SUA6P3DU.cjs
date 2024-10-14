"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkML5TFBOQcjs = require('./chunk-ML5TFBOQ.cjs');


var _chunkF22WIE72cjs = require('./chunk-F22WIE72.cjs');


var _chunkMGQZW2V6cjs = require('./chunk-MGQZW2V6.cjs');


var _chunkGNGCDLLMcjs = require('./chunk-GNGCDLLM.cjs');


var _chunkFPGLT3PIcjs = require('./chunk-FPGLT3PI.cjs');


var _chunk4UO5FLSUcjs = require('./chunk-4UO5FLSU.cjs');


var _chunkDCBLCCARcjs = require('./chunk-DCBLCCAR.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ToDoOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  associatedNotes: _zod.z.lazy(() => _chunkMGQZW2V6cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk4UO5FLSUcjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkDCBLCCARcjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkFPGLT3PIcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  parent: _zod.z.lazy(() => ToDoOrderByWithRelationInputSchema).optional(),
  child: _zod.z.lazy(() => _chunkGNGCDLLMcjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  ToDoList: _zod.z.lazy(() => _chunkF22WIE72cjs.ToDoListOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkML5TFBOQcjs.ToDoOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoOrderByWithRelationInputSchema_default = ToDoOrderByWithRelationInputSchema;




exports.ToDoOrderByWithRelationInputSchema = ToDoOrderByWithRelationInputSchema; exports.ToDoOrderByWithRelationInputSchema_default = ToDoOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-SUA6P3DU.cjs.map