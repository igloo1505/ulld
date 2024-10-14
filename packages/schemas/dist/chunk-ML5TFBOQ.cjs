"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLPBJXNUYcjs = require('./chunk-LPBJXNUY.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ToDoOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ToDoOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkLPBJXNUYcjs.ToDoOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkLPBJXNUYcjs.ToDoOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ToDoOrderByRelevanceInputSchema_default = ToDoOrderByRelevanceInputSchema;




exports.ToDoOrderByRelevanceInputSchema = ToDoOrderByRelevanceInputSchema; exports.ToDoOrderByRelevanceInputSchema_default = ToDoOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-ML5TFBOQ.cjs.map