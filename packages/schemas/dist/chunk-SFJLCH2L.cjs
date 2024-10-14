"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5N7JQYY4cjs = require('./chunk-5N7JQYY4.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5N7JQYY4cjs.SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-SFJLCH2L.cjs.map