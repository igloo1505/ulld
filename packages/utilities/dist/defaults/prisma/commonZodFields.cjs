'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var database = require('@ulld/database');
var zod = require('zod');

var e=zod.z.nativeEnum(database.TERTIARY_TOGGLE),i=zod.z.number().min(0).max(10);

exports.zodRatingField = i;
exports.zodTertiaryToggleSchema = e;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=commonZodFields.cjs.map