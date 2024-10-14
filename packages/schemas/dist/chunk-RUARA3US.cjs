"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOZGUNGV5cjs = require('./chunk-OZGUNGV5.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutCitationsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkOZGUNGV5cjs.IpynbUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default = IpynbUpdateManyWithWhereWithoutCitationsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutCitationsInputSchema = IpynbUpdateManyWithWhereWithoutCitationsInputSchema; exports.IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default = IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default;
//# sourceMappingURL=chunk-RUARA3US.cjs.map