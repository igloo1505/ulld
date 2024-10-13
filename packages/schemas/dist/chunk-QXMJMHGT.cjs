"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD2IZBLQEcjs = require('./chunk-D2IZBLQE.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkD2IZBLQEcjs.SubjectUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default = SubjectUpdateManyWithWhereWithoutKanbanInputSchema;




exports.SubjectUpdateManyWithWhereWithoutKanbanInputSchema = SubjectUpdateManyWithWhereWithoutKanbanInputSchema; exports.SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default = SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-QXMJMHGT.cjs.map