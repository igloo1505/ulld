"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKRLUMOCVcjs = require('./chunk-KRLUMOCV.cjs');


var _chunk5XFTZDAZcjs = require('./chunk-5XFTZDAZ.cjs');


var _chunkOGM23X7Hcjs = require('./chunk-OGM23X7H.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkKRLUMOCVcjs.KanBanCardScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOGM23X7Hcjs.KanBanCardUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5XFTZDAZcjs.KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema;




exports.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema; exports.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-P5SK5FCR.cjs.map