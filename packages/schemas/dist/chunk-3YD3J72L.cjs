"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZJ5SCM6Ycjs = require('./chunk-ZJ5SCM6Y.cjs');


var _chunkWJTMCSRWcjs = require('./chunk-WJTMCSRW.cjs');


var _chunkYSTM35URcjs = require('./chunk-YSTM35UR.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/inputTypeSchemas/CitationsGroupCreateNestedManyWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateNestedManyWithoutEntriesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema).array(), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkZJ5SCM6Ycjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkZJ5SCM6Ycjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema).array()]).optional()
}).strict();
var CitationsGroupCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupCreateNestedManyWithoutEntriesInputSchema;




exports.CitationsGroupCreateNestedManyWithoutEntriesInputSchema = CitationsGroupCreateNestedManyWithoutEntriesInputSchema; exports.CitationsGroupCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupCreateNestedManyWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-3YD3J72L.cjs.map