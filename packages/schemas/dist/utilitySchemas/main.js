import { z } from "zod";
export const zodOptStr = z.string().nullish();
export const zodOptNum = z.number().nullish();
export const urlSchema = z.string().refine((s) => {
    return [
        "https://",
        "http://",
        "www.",
        "/",
        "#"
    ].some((l) => s.startsWith(l));
}, "Must be a valid url.");
