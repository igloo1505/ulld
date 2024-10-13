"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXVULUWMAcjs = require('./chunk-XVULUWMA.cjs');


var _chunkOO3SMXEDcjs = require('./chunk-OO3SMXED.cjs');


var _chunk4B2RTMFDcjs = require('./chunk-4B2RTMFD.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryCreateNestedManyWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema).array(), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkXVULUWMAcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkXVULUWMAcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema;




exports.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema; exports.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-WK6UJP3H.cjs.map