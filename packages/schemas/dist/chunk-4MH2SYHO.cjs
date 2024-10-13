"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6324EXLAcjs = require('./chunk-6324EXLA.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6324EXLAcjs.TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-4MH2SYHO.cjs.map