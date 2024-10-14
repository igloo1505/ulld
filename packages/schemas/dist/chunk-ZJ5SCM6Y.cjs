"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWJTMCSRWcjs = require('./chunk-WJTMCSRW.cjs');


var _chunkYSTM35URcjs = require('./chunk-YSTM35UR.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/inputTypeSchemas/CitationsGroupCreateOrConnectWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default = CitationsGroupCreateOrConnectWithoutEntriesInputSchema;




exports.CitationsGroupCreateOrConnectWithoutEntriesInputSchema = CitationsGroupCreateOrConnectWithoutEntriesInputSchema; exports.CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default = CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-ZJ5SCM6Y.cjs.map