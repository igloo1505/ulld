"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNSXPAWS7cjs = require('./chunk-NSXPAWS7.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNSXPAWS7cjs.IpynbUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema;




exports.IpynbUpdateManyWithWhereWithoutReadingListInputSchema = IpynbUpdateManyWithWhereWithoutReadingListInputSchema; exports.IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-U6NKXH32.cjs.map