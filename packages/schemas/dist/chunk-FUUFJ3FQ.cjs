"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkTDJCCTB6cjs = require('./chunk-TDJCCTB6.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SettingsAppendixScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTDJCCTB6cjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsAppendixScalarWhereWithAggregatesInputSchema_default = SettingsAppendixScalarWhereWithAggregatesInputSchema;




exports.SettingsAppendixScalarWhereWithAggregatesInputSchema = SettingsAppendixScalarWhereWithAggregatesInputSchema; exports.SettingsAppendixScalarWhereWithAggregatesInputSchema_default = SettingsAppendixScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-FUUFJ3FQ.cjs.map