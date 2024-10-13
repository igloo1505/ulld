"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXH6WTYJNcjs = require('./chunk-XH6WTYJN.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkXH6WTYJNcjs.WhiteboardOrderByRelevanceInputSchema).optional()
}).strict();
var WhiteboardOrderByWithRelationInputSchema_default = WhiteboardOrderByWithRelationInputSchema;




exports.WhiteboardOrderByWithRelationInputSchema = WhiteboardOrderByWithRelationInputSchema; exports.WhiteboardOrderByWithRelationInputSchema_default = WhiteboardOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-W4SKYDZX.cjs.map