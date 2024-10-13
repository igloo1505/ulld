"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4I2QSPHGcjs = require('./chunk-4I2QSPHG.cjs');


var _chunk2BQ62HRTcjs = require('./chunk-2BQ62HRT.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/QAPairUpdateManyArgsSchema.ts
var _zod = require('zod');
var QAPairUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2BQ62HRTcjs.QAPairUpdateManyMutationInputSchema, _chunk4I2QSPHGcjs.QAPairUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.QAPairWhereInputSchema.optional()
}).strict();
var QAPairUpdateManyArgsSchema_default = QAPairUpdateManyArgsSchema;




exports.QAPairUpdateManyArgsSchema = QAPairUpdateManyArgsSchema; exports.QAPairUpdateManyArgsSchema_default = QAPairUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-BSQ6R6OF.cjs.map