"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJU64I2VOcjs = require('./chunk-JU64I2VO.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkJU64I2VOcjs.SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-KTE54AIL.cjs.map