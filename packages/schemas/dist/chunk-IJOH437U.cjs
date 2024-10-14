"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAEIZWIXDcjs = require('./chunk-AEIZWIXD.cjs');

// src/database/inputTypeSchemas/CitationsGroupCreateInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  entries: _zod.z.lazy(() => _chunkAEIZWIXDcjs.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupCreateInputSchema_default = CitationsGroupCreateInputSchema;




exports.CitationsGroupCreateInputSchema = CitationsGroupCreateInputSchema; exports.CitationsGroupCreateInputSchema_default = CitationsGroupCreateInputSchema_default;
//# sourceMappingURL=chunk-IJOH437U.cjs.map