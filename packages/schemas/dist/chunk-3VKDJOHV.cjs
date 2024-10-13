"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWMMTL4C5cjs = require('./chunk-WMMTL4C5.cjs');


var _chunkOK2DQVT7cjs = require('./chunk-OK2DQVT7.cjs');


var _chunkU6VJIOIBcjs = require('./chunk-U6VJIOIB.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWMMTL4C5cjs.CitationsGroupScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkU6VJIOIBcjs.CitationsGroupUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkOK2DQVT7cjs.CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema;




exports.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema; exports.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default = CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-3VKDJOHV.cjs.map