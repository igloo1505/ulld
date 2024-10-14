"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLMGLXZCNcjs = require('./chunk-LMGLXZCN.cjs');


var _chunk6AZJLYA7cjs = require('./chunk-6AZJLYA7.cjs');


var _chunkPS5V2F3Ecjs = require('./chunk-PS5V2F3E.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkLMGLXZCNcjs.CitationsGroupScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPS5V2F3Ecjs.CitationsGroupUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6AZJLYA7cjs.CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema;




exports.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema; exports.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-VGF4MNAI.cjs.map