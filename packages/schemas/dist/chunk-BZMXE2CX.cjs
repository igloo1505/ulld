"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC5VTHDDAcjs = require('./chunk-C5VTHDDA.cjs');

// src/database/outputTypeSchemas/EquationCreateManyArgsSchema.ts
var _zod = require('zod');
var EquationCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkC5VTHDDAcjs.EquationCreateManyInputSchema, _chunkC5VTHDDAcjs.EquationCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var EquationCreateManyArgsSchema_default = EquationCreateManyArgsSchema;




exports.EquationCreateManyArgsSchema = EquationCreateManyArgsSchema; exports.EquationCreateManyArgsSchema_default = EquationCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-BZMXE2CX.cjs.map