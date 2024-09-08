'use strict';

var database = require('@ulld/database');
var zod = require('zod');

// src/defaults/prisma/commonZodFields.ts
var zodTertiaryToggleSchema = zod.z.nativeEnum(database.TERTIARY_TOGGLE);
var zodRatingField = zod.z.number().min(0).max(10);

exports.zodRatingField = zodRatingField;
exports.zodTertiaryToggleSchema = zodTertiaryToggleSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=commonZodFields.cjs.map