"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZIXX7KS3cjs = require('./chunk-ZIXX7KS3.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutQaPairInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkZIXX7KS3cjs.SubjectUncheckedUpdateManyWithoutQaPairInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default = SubjectUpdateManyWithWhereWithoutQaPairInputSchema;




exports.SubjectUpdateManyWithWhereWithoutQaPairInputSchema = SubjectUpdateManyWithWhereWithoutQaPairInputSchema; exports.SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default = SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default;
//# sourceMappingURL=chunk-BFFUXJGS.cjs.map