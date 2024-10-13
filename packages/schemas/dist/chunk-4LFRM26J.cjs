"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2IJ3EJZ3cjs = require('./chunk-2IJ3EJZ3.cjs');


var _chunkVQGEMZLScjs = require('./chunk-VQGEMZLS.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/RelatedValuesUpdateManyArgsSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVQGEMZLScjs.RelatedValuesUpdateManyMutationInputSchema, _chunk2IJ3EJZ3cjs.RelatedValuesUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema.optional()
}).strict();
var RelatedValuesUpdateManyArgsSchema_default = RelatedValuesUpdateManyArgsSchema;




exports.RelatedValuesUpdateManyArgsSchema = RelatedValuesUpdateManyArgsSchema; exports.RelatedValuesUpdateManyArgsSchema_default = RelatedValuesUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-4LFRM26J.cjs.map