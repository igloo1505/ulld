"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH655EHKFcjs = require('./chunk-H655EHKF.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkH655EHKFcjs.SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-SUIUTF6E.cjs.map