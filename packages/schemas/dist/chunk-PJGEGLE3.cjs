"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6QG7JPZ3cjs = require('./chunk-6QG7JPZ3.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6QG7JPZ3cjs.SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-PJGEGLE3.cjs.map