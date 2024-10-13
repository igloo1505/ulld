"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKQUILAPEcjs = require('./chunk-KQUILAPE.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKQUILAPEcjs.TopicUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-P6IXYI3Z.cjs.map