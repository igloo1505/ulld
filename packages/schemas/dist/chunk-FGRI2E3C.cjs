"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY7URZVWMcjs = require('./chunk-Y7URZVWM.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkY7URZVWMcjs.WhiteboardOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkY7URZVWMcjs.WhiteboardOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var WhiteboardOrderByRelevanceInputSchema_default = WhiteboardOrderByRelevanceInputSchema;




exports.WhiteboardOrderByRelevanceInputSchema = WhiteboardOrderByRelevanceInputSchema; exports.WhiteboardOrderByRelevanceInputSchema_default = WhiteboardOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-FGRI2E3C.cjs.map