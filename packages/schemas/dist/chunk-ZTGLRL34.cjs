"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSE2G5BIHcjs = require('./chunk-SE2G5BIH.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSE2G5BIHcjs.TopicUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutToDoInputSchema_default = TopicUpdateManyWithWhereWithoutToDoInputSchema;




exports.TopicUpdateManyWithWhereWithoutToDoInputSchema = TopicUpdateManyWithWhereWithoutToDoInputSchema; exports.TopicUpdateManyWithWhereWithoutToDoInputSchema_default = TopicUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-ZTGLRL34.cjs.map