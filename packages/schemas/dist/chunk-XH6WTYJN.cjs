"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4FUALD4Tcjs = require('./chunk-4FUALD4T.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk4FUALD4Tcjs.WhiteboardOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk4FUALD4Tcjs.WhiteboardOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var WhiteboardOrderByRelevanceInputSchema_default = WhiteboardOrderByRelevanceInputSchema;




exports.WhiteboardOrderByRelevanceInputSchema = WhiteboardOrderByRelevanceInputSchema; exports.WhiteboardOrderByRelevanceInputSchema_default = WhiteboardOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-XH6WTYJN.cjs.map