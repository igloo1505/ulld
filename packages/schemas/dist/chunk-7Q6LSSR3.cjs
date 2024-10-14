"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBP5FCKK7cjs = require('./chunk-BP5FCKK7.cjs');


var _chunk54Y7O4A2cjs = require('./chunk-54Y7O4A2.cjs');


var _chunkTERO4NRDcjs = require('./chunk-TERO4NRD.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk54Y7O4A2cjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTERO4NRDcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkBP5FCKK7cjs.ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-7Q6LSSR3.cjs.map