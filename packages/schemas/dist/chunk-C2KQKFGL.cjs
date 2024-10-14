"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKTA42SAOcjs = require('./chunk-KTA42SAO.cjs');


var _chunk7RV3ROZZcjs = require('./chunk-7RV3ROZZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema;




exports.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema; exports.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-C2KQKFGL.cjs.map