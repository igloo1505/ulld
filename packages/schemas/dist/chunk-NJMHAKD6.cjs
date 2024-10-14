"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLSYV6S2Ycjs = require('./chunk-LSYV6S2Y.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLSYV6S2Ycjs.SubjectUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default = SubjectUpdateManyWithWhereWithoutKanbanInputSchema;




exports.SubjectUpdateManyWithWhereWithoutKanbanInputSchema = SubjectUpdateManyWithWhereWithoutKanbanInputSchema; exports.SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default = SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-NJMHAKD6.cjs.map