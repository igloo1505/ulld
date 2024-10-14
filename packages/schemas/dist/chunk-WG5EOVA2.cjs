"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK4XDY24Kcjs = require('./chunk-K4XDY24K.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkK4XDY24Kcjs.TopicUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-WG5EOVA2.cjs.map