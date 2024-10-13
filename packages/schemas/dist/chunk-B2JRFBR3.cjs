"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY5PGCWX2cjs = require('./chunk-Y5PGCWX2.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkY5PGCWX2cjs.SubjectUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default = SubjectUpdateManyWithWhereWithoutTodoListInputSchema;




exports.SubjectUpdateManyWithWhereWithoutTodoListInputSchema = SubjectUpdateManyWithWhereWithoutTodoListInputSchema; exports.SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default = SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-B2JRFBR3.cjs.map