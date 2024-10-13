"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7OLDY3FPcjs = require('./chunk-7OLDY3FP.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var MdxNoteOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk7OLDY3FPcjs.MdxNoteOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk7OLDY3FPcjs.MdxNoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var MdxNoteOrderByRelevanceInputSchema_default = MdxNoteOrderByRelevanceInputSchema;




exports.MdxNoteOrderByRelevanceInputSchema = MdxNoteOrderByRelevanceInputSchema; exports.MdxNoteOrderByRelevanceInputSchema_default = MdxNoteOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-JR3PPHH6.cjs.map