"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOO3SMXEDcjs = require('./chunk-OO3SMXED.cjs');


var _chunk4B2RTMFDcjs = require('./chunk-4B2RTMFD.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema;




exports.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema; exports.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default = BibEntryCreateOrConnectWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-XVULUWMA.cjs.map