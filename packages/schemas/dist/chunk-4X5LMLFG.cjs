"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEE5UJIYVcjs = require('./chunk-EE5UJIYV.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkEE5UJIYVcjs.TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-4X5LMLFG.cjs.map