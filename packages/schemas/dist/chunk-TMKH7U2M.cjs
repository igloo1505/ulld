"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk564WVWWOcjs = require('./chunk-564WVWWO.cjs');


var _chunk4LN73IFRcjs = require('./chunk-4LN73IFR.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk4LN73IFRcjs.TimePeriodUpdateWithoutDietInputSchema), _zod.z.lazy(() => _chunk564WVWWOcjs.TimePeriodUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;




exports.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema; exports.TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-TMKH7U2M.cjs.map