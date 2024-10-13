"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW3NJ27POcjs = require('./chunk-W3NJ27PO.cjs');


var _chunkSAPTKDBNcjs = require('./chunk-SAPTKDBN.cjs');


var _chunkE7XD6YKXcjs = require('./chunk-E7XD6YKX.cjs');

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithWhereWithoutDietInputSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW3NJ27POcjs.TimePeriodScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkE7XD6YKXcjs.TimePeriodUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkSAPTKDBNcjs.TimePeriodUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default = TimePeriodUpdateManyWithWhereWithoutDietInputSchema;




exports.TimePeriodUpdateManyWithWhereWithoutDietInputSchema = TimePeriodUpdateManyWithWhereWithoutDietInputSchema; exports.TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default = TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-3XJOBNGH.cjs.map