"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX4N3K3ZEcjs = require('./chunk-X4N3K3ZE.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkX4N3K3ZEcjs.BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-UR4RA6JM.cjs.map