"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB25LD2WBcjs = require('./chunk-B25LD2WB.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanbanOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanbanOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkB25LD2WBcjs.KanbanOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkB25LD2WBcjs.KanbanOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanbanOrderByRelevanceInputSchema_default = KanbanOrderByRelevanceInputSchema;




exports.KanbanOrderByRelevanceInputSchema = KanbanOrderByRelevanceInputSchema; exports.KanbanOrderByRelevanceInputSchema_default = KanbanOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-3ZHBM4SP.cjs.map