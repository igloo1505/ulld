"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFGRI2E3Ccjs = require('./chunk-FGRI2E3C.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkFGRI2E3Ccjs.WhiteboardOrderByRelevanceInputSchema).optional()
}).strict();
var WhiteboardOrderByWithRelationInputSchema_default = WhiteboardOrderByWithRelationInputSchema;




exports.WhiteboardOrderByWithRelationInputSchema = WhiteboardOrderByWithRelationInputSchema; exports.WhiteboardOrderByWithRelationInputSchema_default = WhiteboardOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-UBZQMVTY.cjs.map