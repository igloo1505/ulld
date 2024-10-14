"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk564WVWWOcjs = require('./chunk-564WVWWO.cjs');


var _chunk4LN73IFRcjs = require('./chunk-4LN73IFR.cjs');


var _chunkKDIXAJ23cjs = require('./chunk-KDIXAJ23.cjs');


var _chunkXLAXCJDHcjs = require('./chunk-XLAXCJDH.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/inputTypeSchemas/TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk4LN73IFRcjs.TimePeriodUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk564WVWWOcjs.TimePeriodUncheckedUpdateWithoutDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema;




exports.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema; exports.TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-XFKPUF3U.cjs.map