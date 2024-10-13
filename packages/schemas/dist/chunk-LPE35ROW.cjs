"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC5VTHDDAcjs = require('./chunk-C5VTHDDA.cjs');

// src/database/outputTypeSchemas/EquationCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var EquationCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkC5VTHDDAcjs.EquationCreateManyInputSchema, _chunkC5VTHDDAcjs.EquationCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var EquationCreateManyAndReturnArgsSchema_default = EquationCreateManyAndReturnArgsSchema;




exports.EquationCreateManyAndReturnArgsSchema = EquationCreateManyAndReturnArgsSchema; exports.EquationCreateManyAndReturnArgsSchema_default = EquationCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-LPE35ROW.cjs.map