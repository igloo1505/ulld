"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTT7P4S3Ncjs = require('./chunk-TT7P4S3N.cjs');

// src/database/outputTypeSchemas/EquationCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var EquationCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkTT7P4S3Ncjs.EquationCountOutputTypeSelectSchema).nullish()
}).strict();
var EquationCountOutputTypeArgsSchema_default = _chunkTT7P4S3Ncjs.EquationCountOutputTypeSelectSchema;




exports.EquationCountOutputTypeArgsSchema = EquationCountOutputTypeArgsSchema; exports.EquationCountOutputTypeArgsSchema_default = EquationCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-2IRTJ4DE.cjs.map