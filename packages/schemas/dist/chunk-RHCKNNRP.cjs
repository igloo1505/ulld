"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMICBRRGLcjs = require('./chunk-MICBRRGL.cjs');


var _chunk3D7SM4DLcjs = require('./chunk-3D7SM4DL.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/RelatedValuesUpdateManyArgsSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk3D7SM4DLcjs.RelatedValuesUpdateManyMutationInputSchema, _chunkMICBRRGLcjs.RelatedValuesUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema.optional()
}).strict();
var RelatedValuesUpdateManyArgsSchema_default = RelatedValuesUpdateManyArgsSchema;




exports.RelatedValuesUpdateManyArgsSchema = RelatedValuesUpdateManyArgsSchema; exports.RelatedValuesUpdateManyArgsSchema_default = RelatedValuesUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-RHCKNNRP.cjs.map