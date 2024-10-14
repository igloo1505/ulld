"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC43YG6QBcjs = require('./chunk-C43YG6QB.cjs');


var _chunk435SGZ76cjs = require('./chunk-435SGZ76.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk435SGZ76cjs.CitationsGroupUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkC43YG6QBcjs.CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema;




exports.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema; exports.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-U6IP4GRP.cjs.map