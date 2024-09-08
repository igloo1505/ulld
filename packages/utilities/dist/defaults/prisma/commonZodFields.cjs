'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var database = require('@ulld/database');
var zod = require('zod');

var i=zod.z.nativeEnum(database.TERTIARY_TOGGLE),n=zod.z.number().min(0).max(10);

exports.zodRatingField = n;
exports.zodTertiaryToggleSchema = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=commonZodFields.cjs.map