"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHMG3PA6Icjs = require('./chunk-HMG3PA6I.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedCreateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  entries: _zod.z.lazy(() => _chunkHMG3PA6Icjs.BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupUncheckedCreateInputSchema_default = CitationsGroupUncheckedCreateInputSchema;




exports.CitationsGroupUncheckedCreateInputSchema = CitationsGroupUncheckedCreateInputSchema; exports.CitationsGroupUncheckedCreateInputSchema_default = CitationsGroupUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-DDWRPYDP.cjs.map