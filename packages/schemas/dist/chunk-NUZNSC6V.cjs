"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRGU3F64Qcjs = require('./chunk-RGU3F64Q.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkRGU3F64Qcjs.IpynbUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default = IpynbUpdateManyWithWhereWithoutTopicsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutTopicsInputSchema = IpynbUpdateManyWithWhereWithoutTopicsInputSchema; exports.IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default = IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-NUZNSC6V.cjs.map