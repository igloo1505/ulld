"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK747UGZJcjs = require('./chunk-K747UGZJ.cjs');


var _chunkOX6WFXYZcjs = require('./chunk-OX6WFXYZ.cjs');


var _chunkEUQKSIFZcjs = require('./chunk-EUQKSIFZ.cjs');


var _chunkRW6GRDCUcjs = require('./chunk-RW6GRDCU.cjs');


var _chunkTHKMJBVZcjs = require('./chunk-THKMJBVZ.cjs');


var _chunkXIFXR42Ecjs = require('./chunk-XIFXR42E.cjs');


var _chunkFSUP6TTZcjs = require('./chunk-FSUP6TTZ.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema.ts
var _zod = require('zod');
var BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema).array(), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkTHKMJBVZcjs.BibEntryCreateOrConnectWithoutBibInputSchema), _zod.z.lazy(() => _chunkTHKMJBVZcjs.BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkEUQKSIFZcjs.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema), _zod.z.lazy(() => _chunkEUQKSIFZcjs.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkRW6GRDCUcjs.BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkOX6WFXYZcjs.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema), _zod.z.lazy(() => _chunkOX6WFXYZcjs.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkK747UGZJcjs.BibEntryUpdateManyWithWhereWithoutBibInputSchema), _zod.z.lazy(() => _chunkK747UGZJcjs.BibEntryUpdateManyWithWhereWithoutBibInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema), _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema_default = BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema;




exports.BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema = BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema; exports.BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema_default = BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema_default;
//# sourceMappingURL=chunk-IKSV4MZS.cjs.map