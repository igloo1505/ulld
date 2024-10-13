"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAZQRO5Q3cjs = require('./chunk-AZQRO5Q3.cjs');


var _chunkOXMVN5ZWcjs = require('./chunk-OXMVN5ZW.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateOrConnectWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodCreateOrConnectWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkAZQRO5Q3cjs.TimePeriodCreateWithoutDietInputSchema), _zod.z.lazy(() => _chunkOXMVN5ZWcjs.TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodCreateOrConnectWithoutDietInputSchema_default = TimePeriodCreateOrConnectWithoutDietInputSchema;




exports.TimePeriodCreateOrConnectWithoutDietInputSchema = TimePeriodCreateOrConnectWithoutDietInputSchema; exports.TimePeriodCreateOrConnectWithoutDietInputSchema_default = TimePeriodCreateOrConnectWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-MRFO257Q.cjs.map