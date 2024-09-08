import '../chunk-F3FYYIAV.js';
import dayjs from 'dayjs';
import { z } from 'zod';

var zodOptStr = z.string().optional().nullable();
var zodOptNum = z.number().optional().nullable();
var zodOptBool = (defVal) => z.union([z.boolean(), z.string()]).optional().nullable().default(defVal).transform((a) => typeof a === "boolean" ? a : a === "true");
var zodCoerceToDate = (optional = false, defaultReturn) => {
  if (optional) {
    return z.union([z.string().datetime(), z.number(), z.date()]).optional().nullable().transform((a) => {
      if (dayjs(a).isValid()) {
        return new Date(a);
      }
      return defaultReturn;
    });
  }
  return z.union([z.string().datetime(), z.number(), z.date()]).transform((a) => {
    return new Date(a);
  });
};

export { zodCoerceToDate, zodOptBool, zodOptNum, zodOptStr };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utility.js.map