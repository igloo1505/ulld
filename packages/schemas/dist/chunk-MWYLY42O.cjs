"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYDBW6TKYcjs = require('./chunk-YDBW6TKY.cjs');

// src/database/outputTypeSchemas/EquationCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var EquationCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkYDBW6TKYcjs.EquationCountOutputTypeSelectSchema).nullish()
}).strict();
var EquationCountOutputTypeArgsSchema_default = _chunkYDBW6TKYcjs.EquationCountOutputTypeSelectSchema;




exports.EquationCountOutputTypeArgsSchema = EquationCountOutputTypeArgsSchema; exports.EquationCountOutputTypeArgsSchema_default = EquationCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-MWYLY42O.cjs.map