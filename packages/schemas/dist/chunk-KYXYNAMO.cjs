"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX44BHDREcjs = require('./chunk-X44BHDRE.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkX44BHDREcjs.TopicUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.TopicUpdateManyWithWhereWithoutMdxNotesInputSchema = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-KYXYNAMO.cjs.map