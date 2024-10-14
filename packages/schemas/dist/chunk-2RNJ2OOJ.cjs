"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF6KUTXIQcjs = require('./chunk-F6KUTXIQ.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanbanOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanbanOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkF6KUTXIQcjs.KanbanOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkF6KUTXIQcjs.KanbanOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanbanOrderByRelevanceInputSchema_default = KanbanOrderByRelevanceInputSchema;




exports.KanbanOrderByRelevanceInputSchema = KanbanOrderByRelevanceInputSchema; exports.KanbanOrderByRelevanceInputSchema_default = KanbanOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-2RNJ2OOJ.cjs.map