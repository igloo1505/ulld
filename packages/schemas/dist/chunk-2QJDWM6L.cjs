"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6I6UTZ7Xcjs = require('./chunk-6I6UTZ7X.cjs');


var _chunkQOZ4VIARcjs = require('./chunk-QOZ4VIAR.cjs');


var _chunkTKXKCQMXcjs = require('./chunk-TKXKCQMX.cjs');

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var QAPairUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQOZ4VIARcjs.QAPairScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTKXKCQMXcjs.QAPairUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6I6UTZ7Xcjs.QAPairUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTagsInputSchema_default = QAPairUpdateManyWithWhereWithoutTagsInputSchema;




exports.QAPairUpdateManyWithWhereWithoutTagsInputSchema = QAPairUpdateManyWithWhereWithoutTagsInputSchema; exports.QAPairUpdateManyWithWhereWithoutTagsInputSchema_default = QAPairUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-2QJDWM6L.cjs.map