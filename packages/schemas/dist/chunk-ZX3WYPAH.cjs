"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2LKMBOB2cjs = require('./chunk-2LKMBOB2.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ToDoOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk2LKMBOB2cjs.ToDoOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk2LKMBOB2cjs.ToDoOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ToDoOrderByRelevanceInputSchema_default = ToDoOrderByRelevanceInputSchema;




exports.ToDoOrderByRelevanceInputSchema = ToDoOrderByRelevanceInputSchema; exports.ToDoOrderByRelevanceInputSchema_default = ToDoOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-ZX3WYPAH.cjs.map