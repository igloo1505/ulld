"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7HNG3QRRcjs = require('./chunk-7HNG3QRR.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk7HNG3QRRcjs.NoteTypeOrderByRelevanceInputSchema).optional()
}).strict();
var NoteTypeOrderByWithRelationInputSchema_default = NoteTypeOrderByWithRelationInputSchema;




exports.NoteTypeOrderByWithRelationInputSchema = NoteTypeOrderByWithRelationInputSchema; exports.NoteTypeOrderByWithRelationInputSchema_default = NoteTypeOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-DXQGOMEQ.cjs.map