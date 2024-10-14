"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHZT3GU4Dcjs = require('./chunk-HZT3GU4D.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SubjectUpdateManyArgsSchema.ts
var _zod = require('zod');
var SubjectUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema, _chunkHZT3GU4Dcjs.SubjectUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.SubjectWhereInputSchema.optional()
}).strict();
var SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema;




exports.SubjectUpdateManyArgsSchema = SubjectUpdateManyArgsSchema; exports.SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-7GXXKBOB.cjs.map