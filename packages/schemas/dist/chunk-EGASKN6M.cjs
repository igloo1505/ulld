"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVMTVDIZScjs = require('./chunk-VMTVDIZS.cjs');


var _chunkWNCQ5JKWcjs = require('./chunk-WNCQ5JKW.cjs');


var _chunkOO3SMXEDcjs = require('./chunk-OO3SMXED.cjs');


var _chunk4B2RTMFDcjs = require('./chunk-4B2RTMFD.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkWNCQ5JKWcjs.BibEntryUpdateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkVMTVDIZScjs.BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema;




exports.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema; exports.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-EGASKN6M.cjs.map