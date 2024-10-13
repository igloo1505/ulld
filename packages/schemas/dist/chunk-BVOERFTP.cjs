"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSHTIJJAScjs = require('./chunk-SHTIJJAS.cjs');


var _chunkR4IOOT2Acjs = require('./chunk-R4IOOT2A.cjs');


var _chunk2BQ62HRTcjs = require('./chunk-2BQ62HRT.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkR4IOOT2Acjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2BQ62HRTcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSHTIJJAScjs.QAPairUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTagsInputSchema_default = QAPairUpdateManyWithWhereWithoutTagsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutTagsInputSchema = QAPairUpdateManyWithWhereWithoutTagsInputSchema; exports.QAPairUpdateManyWithWhereWithoutTagsInputSchema_default = QAPairUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-BVOERFTP.cjs.map