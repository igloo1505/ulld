"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk34HQUGQLcjs = require('./chunk-34HQUGQL.cjs');


var _chunkQOZ4VIARcjs = require('./chunk-QOZ4VIAR.cjs');


var _chunkTKXKCQMXcjs = require('./chunk-TKXKCQMX.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQOZ4VIARcjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTKXKCQMXcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk34HQUGQLcjs.QAPairUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default = QAPairUpdateManyWithWhereWithoutTopicsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutTopicsInputSchema = QAPairUpdateManyWithWhereWithoutTopicsInputSchema; exports.QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default = QAPairUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-7UWCEYUN.cjs.map