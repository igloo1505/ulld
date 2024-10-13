"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRG3KCJPWcjs = require('./chunk-RG3KCJPW.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkRG3KCJPWcjs.TopicUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.TopicUpdateManyWithWhereWithoutMdxNotesInputSchema = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-4BKXNXF7.cjs.map