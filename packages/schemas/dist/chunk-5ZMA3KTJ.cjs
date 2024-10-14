"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB6CA5HXTcjs = require('./chunk-B6CA5HXT.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var MdxNoteOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkB6CA5HXTcjs.MdxNoteOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkB6CA5HXTcjs.MdxNoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var MdxNoteOrderByRelevanceInputSchema_default = MdxNoteOrderByRelevanceInputSchema;




exports.MdxNoteOrderByRelevanceInputSchema = MdxNoteOrderByRelevanceInputSchema; exports.MdxNoteOrderByRelevanceInputSchema_default = MdxNoteOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-5ZMA3KTJ.cjs.map