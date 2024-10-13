"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUSEWSLUGcjs = require('./chunk-USEWSLUG.cjs');


var _chunkCHYMHXD6cjs = require('./chunk-CHYMHXD6.cjs');


var _chunkZC2XFIFPcjs = require('./chunk-ZC2XFIFP.cjs');


var _chunk2VBS5NGScjs = require('./chunk-2VBS5NGS.cjs');


var _chunkQYZ6VCGQcjs = require('./chunk-QYZ6VCGQ.cjs');


var _chunkQJ7DYC27cjs = require('./chunk-QJ7DYC27.cjs');


var _chunkSSBPLQI3cjs = require('./chunk-SSBPLQI3.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithoutBibNestedInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithoutBibNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema).array(), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema), _zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkZC2XFIFPcjs.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema), _zod.z.lazy(() => _chunkZC2XFIFPcjs.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunk2VBS5NGScjs.BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkCHYMHXD6cjs.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema), _zod.z.lazy(() => _chunkCHYMHXD6cjs.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkUSEWSLUGcjs.BibEntryUpdateManyWithWhereWithoutBibInputSchema), _zod.z.lazy(() => _chunkUSEWSLUGcjs.BibEntryUpdateManyWithWhereWithoutBibInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema), _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema).array()]).optional()
}).strict();
var BibEntryUpdateManyWithoutBibNestedInputSchema_default = BibEntryUpdateManyWithoutBibNestedInputSchema;




exports.BibEntryUpdateManyWithoutBibNestedInputSchema = BibEntryUpdateManyWithoutBibNestedInputSchema; exports.BibEntryUpdateManyWithoutBibNestedInputSchema_default = BibEntryUpdateManyWithoutBibNestedInputSchema_default;
//# sourceMappingURL=chunk-XMP3A52L.cjs.map