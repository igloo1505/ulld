"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => GoogleCalendarAuthScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema;




exports.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema; exports.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default = GoogleCalendarAuthScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-7TTPY5BR.cjs.map