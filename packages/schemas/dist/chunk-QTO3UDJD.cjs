"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRRNXLVRJcjs = require('./chunk-RRNXLVRJ.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkRRNXLVRJcjs.TopicUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutTodoListInputSchema_default = TopicUpdateManyWithWhereWithoutTodoListInputSchema;




exports.TopicUpdateManyWithWhereWithoutTodoListInputSchema = TopicUpdateManyWithWhereWithoutTodoListInputSchema; exports.TopicUpdateManyWithWhereWithoutTodoListInputSchema_default = TopicUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-QTO3UDJD.cjs.map