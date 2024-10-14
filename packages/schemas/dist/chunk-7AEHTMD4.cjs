"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP6IK4F2Xcjs = require('./chunk-P6IK4F2X.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutQAPairInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutQAPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkP6IK4F2Xcjs.TopicUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutQAPairInputSchema_default = TopicUpdateManyWithWhereWithoutQAPairInputSchema;




exports.TopicUpdateManyWithWhereWithoutQAPairInputSchema = TopicUpdateManyWithWhereWithoutQAPairInputSchema; exports.TopicUpdateManyWithWhereWithoutQAPairInputSchema_default = TopicUpdateManyWithWhereWithoutQAPairInputSchema_default;
//# sourceMappingURL=chunk-7AEHTMD4.cjs.map