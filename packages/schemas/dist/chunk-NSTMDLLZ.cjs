"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWK6UJP3Hcjs = require('./chunk-WK6UJP3H.cjs');

// src/database/inputTypeSchemas/CitationsGroupCreateInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  entries: _zod.z.lazy(() => _chunkWK6UJP3Hcjs.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupCreateInputSchema_default = CitationsGroupCreateInputSchema;




exports.CitationsGroupCreateInputSchema = CitationsGroupCreateInputSchema; exports.CitationsGroupCreateInputSchema_default = CitationsGroupCreateInputSchema_default;
//# sourceMappingURL=chunk-NSTMDLLZ.cjs.map