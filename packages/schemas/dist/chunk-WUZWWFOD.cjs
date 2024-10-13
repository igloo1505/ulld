"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYSLLQEDcjs = require('./chunk-VYSLLQED.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkVYSLLQEDcjs.SubjectUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default = SubjectUpdateManyWithWhereWithoutEquationsInputSchema;




exports.SubjectUpdateManyWithWhereWithoutEquationsInputSchema = SubjectUpdateManyWithWhereWithoutEquationsInputSchema; exports.SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default = SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-WUZWWFOD.cjs.map