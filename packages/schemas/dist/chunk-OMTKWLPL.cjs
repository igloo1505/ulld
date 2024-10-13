"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY735VHH4cjs = require('./chunk-Y735VHH4.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkY735VHH4cjs.IpynbUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema;




exports.IpynbUpdateManyWithWhereWithoutReadingListInputSchema = IpynbUpdateManyWithWhereWithoutReadingListInputSchema; exports.IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default = IpynbUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-OMTKWLPL.cjs.map