"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZV5LFTE3cjs = require('./chunk-ZV5LFTE3.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _relevance: _zod.z.lazy(() => _chunkZV5LFTE3cjs.GoogleCalendarAuthOrderByRelevanceInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithRelationInputSchema_default = GoogleCalendarAuthOrderByWithRelationInputSchema;




exports.GoogleCalendarAuthOrderByWithRelationInputSchema = GoogleCalendarAuthOrderByWithRelationInputSchema; exports.GoogleCalendarAuthOrderByWithRelationInputSchema_default = GoogleCalendarAuthOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-ZLTPFLTV.cjs.map