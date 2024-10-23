// src/utilitySchemas/main.ts
import { z } from "zod";
var zodOptStr = z.string().nullish();
var zodOptNum = z.number().nullish();
var urlSchema = z.string().refine((s) => {
  return [
    "https://",
    "http://",
    "www.",
    "/",
    "#"
  ].some((l) => s.startsWith(l));
}, "Must be a valid url.");

export {
  zodOptStr,
  zodOptNum,
  urlSchema
};
//# sourceMappingURL=chunk-7ONZ54R5.js.map