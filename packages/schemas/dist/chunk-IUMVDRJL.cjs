"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQOLDELWKcjs = require('./chunk-QOLDELWK.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkQOLDELWKcjs.BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-IUMVDRJL.cjs.map