"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIUMVDRJLcjs = require('./chunk-IUMVDRJL.cjs');


var _chunkW7UPOWWRcjs = require('./chunk-W7UPOWWR.cjs');


var _chunk3EGXQIU3cjs = require('./chunk-3EGXQIU3.cjs');


var _chunkC2KQKFGLcjs = require('./chunk-C2KQKFGL.cjs');


var _chunkKTA42SAOcjs = require('./chunk-KTA42SAO.cjs');


var _chunk7RV3ROZZcjs = require('./chunk-7RV3ROZZ.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema).array(), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkC2KQKFGLcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkC2KQKFGLcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunk3EGXQIU3cjs.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk3EGXQIU3cjs.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkW7UPOWWRcjs.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkW7UPOWWRcjs.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkIUMVDRJLcjs.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkIUMVDRJLcjs.BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema), _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema_default = BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema;




exports.BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema = BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema; exports.BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema_default = BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema_default;
//# sourceMappingURL=chunk-3OXWRUXP.cjs.map