"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKTE2OT7Ocjs = require('./chunk-KTE2OT7O.cjs');


var _chunkTKXKCQMXcjs = require('./chunk-TKXKCQMX.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/QAPairUpdateManyArgsSchema.ts
var _zod = require('zod');
var QAPairUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTKXKCQMXcjs.QAPairUpdateManyMutationInputSchema, _chunkKTE2OT7Ocjs.QAPairUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.QAPairWhereInputSchema.optional()
}).strict();
var QAPairUpdateManyArgsSchema_default = QAPairUpdateManyArgsSchema;




exports.QAPairUpdateManyArgsSchema = QAPairUpdateManyArgsSchema; exports.QAPairUpdateManyArgsSchema_default = QAPairUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-VHXXFPK3.cjs.map