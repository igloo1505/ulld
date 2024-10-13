"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ4GXDN7Rcjs = require('./chunk-Z4GXDN7R.cjs');


var _chunkUILZEJ4Ecjs = require('./chunk-UILZEJ4E.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/EquationUpdateManyArgsSchema.ts
var _zod = require('zod');
var EquationUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkUILZEJ4Ecjs.EquationUpdateManyMutationInputSchema, _chunkZ4GXDN7Rcjs.EquationUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.EquationWhereInputSchema.optional()
}).strict();
var EquationUpdateManyArgsSchema_default = EquationUpdateManyArgsSchema;




exports.EquationUpdateManyArgsSchema = EquationUpdateManyArgsSchema; exports.EquationUpdateManyArgsSchema_default = EquationUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-5AOCCC7M.cjs.map