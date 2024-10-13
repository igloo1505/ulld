"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKNKHWR76cjs = require('./chunk-KNKHWR76.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutQaPairInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKNKHWR76cjs.SubjectUncheckedUpdateManyWithoutQaPairInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default = SubjectUpdateManyWithWhereWithoutQaPairInputSchema;




exports.SubjectUpdateManyWithWhereWithoutQaPairInputSchema = SubjectUpdateManyWithWhereWithoutQaPairInputSchema; exports.SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default = SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default;
//# sourceMappingURL=chunk-PV7SJBAV.cjs.map