"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTAPDMZERcjs = require('./chunk-TAPDMZER.cjs');


var _chunk54Y7O4A2cjs = require('./chunk-54Y7O4A2.cjs');


var _chunkTERO4NRDcjs = require('./chunk-TERO4NRD.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk54Y7O4A2cjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTERO4NRDcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkTAPDMZERcjs.ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-JXHZ6W4X.cjs.map