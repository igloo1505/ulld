"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOJCZCC6Qcjs = require('./chunk-OJCZCC6Q.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOJCZCC6Qcjs.GoogleCalendarAuthOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOJCZCC6Qcjs.GoogleCalendarAuthOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var GoogleCalendarAuthOrderByRelevanceInputSchema_default = GoogleCalendarAuthOrderByRelevanceInputSchema;




exports.GoogleCalendarAuthOrderByRelevanceInputSchema = GoogleCalendarAuthOrderByRelevanceInputSchema; exports.GoogleCalendarAuthOrderByRelevanceInputSchema_default = GoogleCalendarAuthOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-ZV5LFTE3.cjs.map