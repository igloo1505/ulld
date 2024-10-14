"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2P46ADNcjs = require('./chunk-P2P46ADN.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkP2P46ADNcjs.TopicUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutEquationsInputSchema_default = TopicUpdateManyWithWhereWithoutEquationsInputSchema;




exports.TopicUpdateManyWithWhereWithoutEquationsInputSchema = TopicUpdateManyWithWhereWithoutEquationsInputSchema; exports.TopicUpdateManyWithWhereWithoutEquationsInputSchema_default = TopicUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-LKZJQQJQ.cjs.map