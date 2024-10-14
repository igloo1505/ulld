"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT4CDYY64cjs = require('./chunk-T4CDYY64.cjs');


var _chunkC5GE763Icjs = require('./chunk-C5GE763I.cjs');


var _chunkNJL2FG3Ecjs = require('./chunk-NJL2FG3E.cjs');


var _chunkRX6X4NUTcjs = require('./chunk-RX6X4NUT.cjs');


var _chunkSCGIVMZAcjs = require('./chunk-SCGIVMZA.cjs');


var _chunkWFJXYEZAcjs = require('./chunk-WFJXYEZA.cjs');


var _chunkDQJQRZSBcjs = require('./chunk-DQJQRZSB.cjs');


var _chunkX2HYNX4Kcjs = require('./chunk-X2HYNX4K.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateManyWithoutCurrentDietNestedInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyWithoutCurrentDietNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema).array(), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkSCGIVMZAcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkSCGIVMZAcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkT4CDYY64cjs.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkT4CDYY64cjs.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkWFJXYEZAcjs.HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkC5GE763Icjs.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkC5GE763Icjs.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkNJL2FG3Ecjs.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkNJL2FG3Ecjs.HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkRX6X4NUTcjs.HealthReportScalarWhereInputSchema), _zod.z.lazy(() => _chunkRX6X4NUTcjs.HealthReportScalarWhereInputSchema).array()]).optional()
}).strict();
var HealthReportUpdateManyWithoutCurrentDietNestedInputSchema_default = HealthReportUpdateManyWithoutCurrentDietNestedInputSchema;




exports.HealthReportUpdateManyWithoutCurrentDietNestedInputSchema = HealthReportUpdateManyWithoutCurrentDietNestedInputSchema; exports.HealthReportUpdateManyWithoutCurrentDietNestedInputSchema_default = HealthReportUpdateManyWithoutCurrentDietNestedInputSchema_default;
//# sourceMappingURL=chunk-CH5ULX7G.cjs.map