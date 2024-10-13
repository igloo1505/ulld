"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7JEBRYO4cjs = require('./chunk-7JEBRYO4.cjs');


var _chunkVVJ2HNY3cjs = require('./chunk-VVJ2HNY3.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVVJ2HNY3cjs.TimePeriodUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk7JEBRYO4cjs.TimePeriodUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;




exports.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema; exports.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-S62NAQDT.cjs.map