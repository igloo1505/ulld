"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRIH47DFFcjs = require('./chunk-RIH47DFF.cjs');

// src/database/outputTypeSchemas/EquationCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var EquationCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRIH47DFFcjs.EquationCreateManyInputSchema, _chunkRIH47DFFcjs.EquationCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var EquationCreateManyAndReturnArgsSchema_default = EquationCreateManyAndReturnArgsSchema;




exports.EquationCreateManyAndReturnArgsSchema = EquationCreateManyAndReturnArgsSchema; exports.EquationCreateManyAndReturnArgsSchema_default = EquationCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-45RCUDUS.cjs.map