"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLC7XFRTTcjs = require('./chunk-LC7XFRTT.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkLC7XFRTTcjs.ToDoListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkLC7XFRTTcjs.ToDoListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ToDoListOrderByRelevanceInputSchema_default = ToDoListOrderByRelevanceInputSchema;




exports.ToDoListOrderByRelevanceInputSchema = ToDoListOrderByRelevanceInputSchema; exports.ToDoListOrderByRelevanceInputSchema_default = ToDoListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GT4STN4T.cjs.map