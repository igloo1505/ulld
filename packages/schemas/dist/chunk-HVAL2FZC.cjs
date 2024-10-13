"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2G23XEGFcjs = require('./chunk-2G23XEGF.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutQAPairInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutQAPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2G23XEGFcjs.TopicUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutQAPairInputSchema_default = TopicUpdateManyWithWhereWithoutQAPairInputSchema;




exports.TopicUpdateManyWithWhereWithoutQAPairInputSchema = TopicUpdateManyWithWhereWithoutQAPairInputSchema; exports.TopicUpdateManyWithWhereWithoutQAPairInputSchema_default = TopicUpdateManyWithWhereWithoutQAPairInputSchema_default;
//# sourceMappingURL=chunk-HVAL2FZC.cjs.map