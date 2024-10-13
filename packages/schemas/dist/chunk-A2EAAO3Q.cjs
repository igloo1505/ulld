"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGI6TINNEcjs = require('./chunk-GI6TINNE.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGI6TINNEcjs.TopicUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutEquationsInputSchema_default = TopicUpdateManyWithWhereWithoutEquationsInputSchema;




exports.TopicUpdateManyWithWhereWithoutEquationsInputSchema = TopicUpdateManyWithWhereWithoutEquationsInputSchema; exports.TopicUpdateManyWithWhereWithoutEquationsInputSchema_default = TopicUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-A2EAAO3Q.cjs.map