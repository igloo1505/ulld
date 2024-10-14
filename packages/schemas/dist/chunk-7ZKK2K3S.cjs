"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRIH47DFFcjs = require('./chunk-RIH47DFF.cjs');

// src/database/outputTypeSchemas/EquationCreateManyArgsSchema.ts
var _zod = require('zod');
var EquationCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRIH47DFFcjs.EquationCreateManyInputSchema, _chunkRIH47DFFcjs.EquationCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var EquationCreateManyArgsSchema_default = EquationCreateManyArgsSchema;




exports.EquationCreateManyArgsSchema = EquationCreateManyArgsSchema; exports.EquationCreateManyArgsSchema_default = EquationCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-7ZKK2K3S.cjs.map