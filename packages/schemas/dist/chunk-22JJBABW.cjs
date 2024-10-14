"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQDZ5A7M7cjs = require('./chunk-QDZ5A7M7.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkQDZ5A7M7cjs.GoogleCalendarAuthOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkQDZ5A7M7cjs.GoogleCalendarAuthOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var GoogleCalendarAuthOrderByRelevanceInputSchema_default = GoogleCalendarAuthOrderByRelevanceInputSchema;




exports.GoogleCalendarAuthOrderByRelevanceInputSchema = GoogleCalendarAuthOrderByRelevanceInputSchema; exports.GoogleCalendarAuthOrderByRelevanceInputSchema_default = GoogleCalendarAuthOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-22JJBABW.cjs.map