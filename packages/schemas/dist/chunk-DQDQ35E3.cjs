"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ6Z4SCJRcjs = require('./chunk-J6Z4SCJR.cjs');


var _chunkCBMFU45Qcjs = require('./chunk-CBMFU45Q.cjs');


var _chunkJNFEAHHEcjs = require('./chunk-JNFEAHHE.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkCBMFU45Qcjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJNFEAHHEcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkJ6Z4SCJRcjs.ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-DQDQ35E3.cjs.map