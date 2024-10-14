"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUXWDJNMTcjs = require('./chunk-UXWDJNMT.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkUXWDJNMTcjs.SubjectUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default = SubjectUpdateManyWithWhereWithoutEquationsInputSchema;




exports.SubjectUpdateManyWithWhereWithoutEquationsInputSchema = SubjectUpdateManyWithWhereWithoutEquationsInputSchema; exports.SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default = SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-B5TE57L6.cjs.map