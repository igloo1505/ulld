"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLFB4ODK5cjs = require('./chunk-LFB4ODK5.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLFB4ODK5cjs.SubjectUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutToDoInputSchema_default = SubjectUpdateManyWithWhereWithoutToDoInputSchema;




exports.SubjectUpdateManyWithWhereWithoutToDoInputSchema = SubjectUpdateManyWithWhereWithoutToDoInputSchema; exports.SubjectUpdateManyWithWhereWithoutToDoInputSchema_default = SubjectUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-BINNYAXQ.cjs.map