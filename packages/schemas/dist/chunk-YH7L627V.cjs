"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHTBLUYTXcjs = require('./chunk-HTBLUYTX.cjs');


var _chunkR4IOOT2Acjs = require('./chunk-R4IOOT2A.cjs');


var _chunk2BQ62HRTcjs = require('./chunk-2BQ62HRT.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkR4IOOT2Acjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2BQ62HRTcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkHTBLUYTXcjs.QAPairUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default = QAPairUpdateManyWithWhereWithoutTopicsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutTopicsInputSchema = QAPairUpdateManyWithWhereWithoutTopicsInputSchema; exports.QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default = QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-YH7L627V.cjs.map