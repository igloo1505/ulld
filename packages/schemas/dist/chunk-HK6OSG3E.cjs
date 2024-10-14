"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC43YG6QBcjs = require('./chunk-C43YG6QB.cjs');


var _chunk435SGZ76cjs = require('./chunk-435SGZ76.cjs');


var _chunkWJTMCSRWcjs = require('./chunk-WJTMCSRW.cjs');


var _chunkYSTM35URcjs = require('./chunk-YSTM35UR.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk435SGZ76cjs.CitationsGroupUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkC43YG6QBcjs.CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema;




exports.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema; exports.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-HK6OSG3E.cjs.map