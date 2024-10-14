"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVGF4MNAIcjs = require('./chunk-VGF4MNAI.cjs');


var _chunkLMGLXZCNcjs = require('./chunk-LMGLXZCN.cjs');


var _chunkHK6OSG3Ecjs = require('./chunk-HK6OSG3E.cjs');


var _chunkU6IP4GRPcjs = require('./chunk-U6IP4GRP.cjs');


var _chunkZJ5SCM6Ycjs = require('./chunk-ZJ5SCM6Y.cjs');


var _chunkWJTMCSRWcjs = require('./chunk-WJTMCSRW.cjs');


var _chunkYSTM35URcjs = require('./chunk-YSTM35UR.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateManyWithoutEntriesNestedInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateManyWithoutEntriesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkWJTMCSRWcjs.CitationsGroupCreateWithoutEntriesInputSchema).array(), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkYSTM35URcjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkZJ5SCM6Ycjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkZJ5SCM6Ycjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkHK6OSG3Ecjs.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkHK6OSG3Ecjs.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkU6IP4GRPcjs.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkU6IP4GRPcjs.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkVGF4MNAIcjs.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkVGF4MNAIcjs.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkLMGLXZCNcjs.CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => _chunkLMGLXZCNcjs.CitationsGroupScalarWhereInputSchema).array()]).optional()
}).strict();
var CitationsGroupUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUpdateManyWithoutEntriesNestedInputSchema;




exports.CitationsGroupUpdateManyWithoutEntriesNestedInputSchema = CitationsGroupUpdateManyWithoutEntriesNestedInputSchema; exports.CitationsGroupUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUpdateManyWithoutEntriesNestedInputSchema_default;
//# sourceMappingURL=chunk-2VSJOIER.cjs.map