"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRW6GRDCUcjs = require('./chunk-RW6GRDCU.cjs');


var _chunkTHKMJBVZcjs = require('./chunk-THKMJBVZ.cjs');


var _chunkXIFXR42Ecjs = require('./chunk-XIFXR42E.cjs');


var _chunkFSUP6TTZcjs = require('./chunk-FSUP6TTZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUncheckedCreateNestedManyWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema).array(), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkTHKMJBVZcjs.BibEntryCreateOrConnectWithoutBibInputSchema), _zod.z.lazy(() => _chunkTHKMJBVZcjs.BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkRW6GRDCUcjs.BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema;




exports.BibEntryUncheckedCreateNestedManyWithoutBibInputSchema = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema; exports.BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-PL3BA4UW.cjs.map