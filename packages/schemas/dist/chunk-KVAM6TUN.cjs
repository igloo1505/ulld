"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWRLEMVDWcjs = require('./chunk-WRLEMVDW.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedCreateInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  entries: _zod.z.lazy(() => _chunkWRLEMVDWcjs.BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupUncheckedCreateInputSchema_default = CitationsGroupUncheckedCreateInputSchema;




exports.CitationsGroupUncheckedCreateInputSchema = CitationsGroupUncheckedCreateInputSchema; exports.CitationsGroupUncheckedCreateInputSchema_default = CitationsGroupUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-KVAM6TUN.cjs.map