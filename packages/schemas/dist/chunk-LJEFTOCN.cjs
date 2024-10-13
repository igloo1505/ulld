"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGRWORSXTcjs = require('./chunk-GRWORSXT.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGRWORSXTcjs.SubjectUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutToDoInputSchema_default = SubjectUpdateManyWithWhereWithoutToDoInputSchema;




exports.SubjectUpdateManyWithWhereWithoutToDoInputSchema = SubjectUpdateManyWithWhereWithoutToDoInputSchema; exports.SubjectUpdateManyWithWhereWithoutToDoInputSchema_default = SubjectUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-LJEFTOCN.cjs.map