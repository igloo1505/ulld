"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVMTVDIZScjs = require('./chunk-VMTVDIZS.cjs');


var _chunkWNCQ5JKWcjs = require('./chunk-WNCQ5JKW.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWNCQ5JKWcjs.BibEntryUpdateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkVMTVDIZScjs.BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema;




exports.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema; exports.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-KYOK6FLE.cjs.map