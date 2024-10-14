"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4BRR4CDMcjs = require('./chunk-4BRR4CDM.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk4BRR4CDMcjs.ToDoListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk4BRR4CDMcjs.ToDoListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ToDoListOrderByRelevanceInputSchema_default = ToDoListOrderByRelevanceInputSchema;




exports.ToDoListOrderByRelevanceInputSchema = ToDoListOrderByRelevanceInputSchema; exports.ToDoListOrderByRelevanceInputSchema_default = ToDoListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-TQKPMLWG.cjs.map