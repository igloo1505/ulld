"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG7WS5DE7cjs = require('./chunk-G7WS5DE7.cjs');


var _chunkCBMFU45Qcjs = require('./chunk-CBMFU45Q.cjs');


var _chunkJNFEAHHEcjs = require('./chunk-JNFEAHHE.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkCBMFU45Qcjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJNFEAHHEcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkG7WS5DE7cjs.ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-CREI6NWL.cjs.map