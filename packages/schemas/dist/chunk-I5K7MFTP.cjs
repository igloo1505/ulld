"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUR4RA6JMcjs = require('./chunk-UR4RA6JM.cjs');


var _chunkKYOK6FLEcjs = require('./chunk-KYOK6FLE.cjs');


var _chunkEGASKN6Mcjs = require('./chunk-EGASKN6M.cjs');


var _chunkXVULUWMAcjs = require('./chunk-XVULUWMA.cjs');


var _chunkOO3SMXEDcjs = require('./chunk-OO3SMXED.cjs');


var _chunk4B2RTMFDcjs = require('./chunk-4B2RTMFD.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema.ts
var _zod = require('zod');
var BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkOO3SMXEDcjs.BibEntryCreateWithoutCitationGroupsInputSchema).array(), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk4B2RTMFDcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkXVULUWMAcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkXVULUWMAcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkEGASKN6Mcjs.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkEGASKN6Mcjs.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkKYOK6FLEcjs.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkKYOK6FLEcjs.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkUR4RA6JMcjs.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkUR4RA6JMcjs.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema), _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema_default = BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema;




exports.BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema = BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema; exports.BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema_default = BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema_default;
//# sourceMappingURL=chunk-I5K7MFTP.cjs.map