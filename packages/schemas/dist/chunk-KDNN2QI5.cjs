"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMPFMJZKTcjs = require('./chunk-MPFMJZKT.cjs');


var _chunkKOZOBY7Vcjs = require('./chunk-KOZOBY7V.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietUpdateWithWhereUniqueWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpdateWithWhereUniqueWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkKOZOBY7Vcjs.DietUpdateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkMPFMJZKTcjs.DietUncheckedUpdateWithoutItemsInputSchema)])
}).strict();
var DietUpdateWithWhereUniqueWithoutItemsInputSchema_default = DietUpdateWithWhereUniqueWithoutItemsInputSchema;




exports.DietUpdateWithWhereUniqueWithoutItemsInputSchema = DietUpdateWithWhereUniqueWithoutItemsInputSchema; exports.DietUpdateWithWhereUniqueWithoutItemsInputSchema_default = DietUpdateWithWhereUniqueWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-KDNN2QI5.cjs.map