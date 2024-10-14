"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKDIXAJ23cjs = require('./chunk-KDIXAJ23.cjs');


var _chunkXLAXCJDHcjs = require('./chunk-XLAXCJDH.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateOrConnectWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateOrConnectWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKDIXAJ23cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkXLAXCJDHcjs.TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodCreateOrConnectWithoutDietInputSchema_default = TimePeriodCreateOrConnectWithoutDietInputSchema;




exports.TimePeriodCreateOrConnectWithoutDietInputSchema = TimePeriodCreateOrConnectWithoutDietInputSchema; exports.TimePeriodCreateOrConnectWithoutDietInputSchema_default = TimePeriodCreateOrConnectWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-PF6MTGUH.cjs.map