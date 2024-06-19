import { z } from "zod";
import { databaseBuildSchema } from "./database/database";

export const buildOnlySchema = z.object({
    database: databaseBuildSchema.default({}),
}).default({})
