'use strict';

var dayjs = require('dayjs');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var dayjs__default = /*#__PURE__*/_interopDefault(dayjs);

// src/schemas/utility.ts
var zodOptStr = zod.z.string().optional().nullable();
var zodOptNum = zod.z.number().optional().nullable();
var zodOptBool = (defVal) => zod.z.union([zod.z.boolean(), zod.z.string()]).optional().nullable().default(defVal).transform((a) => typeof a === "boolean" ? a : a === "true");
var zodCoerceToDate = (optional = false, defaultReturn) => {
  if (optional) {
    return zod.z.union([zod.z.string().datetime(), zod.z.number(), zod.z.date()]).optional().nullable().transform((a) => {
      if (dayjs__default.default(a).isValid()) {
        return new Date(a);
      }
      return defaultReturn;
    });
  }
  return zod.z.union([zod.z.string().datetime(), zod.z.number(), zod.z.date()]).transform((a) => {
    return new Date(a);
  });
};

exports.zodCoerceToDate = zodCoerceToDate;
exports.zodOptBool = zodOptBool;
exports.zodOptNum = zodOptNum;
exports.zodOptStr = zodOptStr;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utility.cjs.map