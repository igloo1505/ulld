"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOOOIFKHYcjs = require('./chunk-OOOIFKHY.cjs');


var _chunkVGYEMIKXcjs = require('./chunk-VGYEMIKX.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/EquationUpdateManyArgsSchema.ts
var _zod = require('zod');
var EquationUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVGYEMIKXcjs.EquationUpdateManyMutationInputSchema, _chunkOOOIFKHYcjs.EquationUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.EquationWhereInputSchema.optional()
}).strict();
var EquationUpdateManyArgsSchema_default = EquationUpdateManyArgsSchema;




exports.EquationUpdateManyArgsSchema = EquationUpdateManyArgsSchema; exports.EquationUpdateManyArgsSchema_default = EquationUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-AZ52VTAL.cjs.map