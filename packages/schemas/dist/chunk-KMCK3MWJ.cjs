"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAOA7WGSMcjs = require('./chunk-AOA7WGSM.cjs');


var _chunkCBMFU45Qcjs = require('./chunk-CBMFU45Q.cjs');


var _chunkJNFEAHHEcjs = require('./chunk-JNFEAHHE.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkCBMFU45Qcjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJNFEAHHEcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkAOA7WGSMcjs.ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-KMCK3MWJ.cjs.map