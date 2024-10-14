"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunk2UTLPTAScjs = require('./chunk-2UTLPTAS.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SettingsAppendixScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2UTLPTAScjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsAppendixScalarWhereWithAggregatesInputSchema_default = SettingsAppendixScalarWhereWithAggregatesInputSchema;




exports.SettingsAppendixScalarWhereWithAggregatesInputSchema = SettingsAppendixScalarWhereWithAggregatesInputSchema; exports.SettingsAppendixScalarWhereWithAggregatesInputSchema_default = SettingsAppendixScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-5HCJFP6F.cjs.map