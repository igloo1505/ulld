"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema;




exports.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema; exports.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-FHGT62N2.cjs.map