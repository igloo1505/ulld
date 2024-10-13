"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7JEBRYO4cjs = require('./chunk-7JEBRYO4.cjs');


var _chunkVVJ2HNY3cjs = require('./chunk-VVJ2HNY3.cjs');


var _chunkAZQRO5Q3cjs = require('./chunk-AZQRO5Q3.cjs');


var _chunkOXMVN5ZWcjs = require('./chunk-OXMVN5ZW.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/inputTypeSchemas/TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkVVJ2HNY3cjs.TimePeriodUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk7JEBRYO4cjs.TimePeriodUncheckedUpdateWithoutDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema;




exports.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema; exports.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-YM4L6F3L.cjs.map