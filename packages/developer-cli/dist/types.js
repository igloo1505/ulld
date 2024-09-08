import { z } from "zod";
export const pluginStatusTypeSchema = z.union([
    z.literal("installed").describe("is in node_modules"),
    z.literal("install-failed").describe("attempted install of package and failed. Generic error."),
    z.literal("not-found").describe("Attemped install and could not find plugin"),
    z.literal("not-installed").describe("Package is not installed and an install attempt has not yet been made."),
]);
