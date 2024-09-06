import { z } from "zod";
import { databaseBuildSchema } from "./database/database.js";
import { additionalUserContent } from "./additional/additionalUserContent.js";

export const buildOnlySchema = z
    .object({
        database: databaseBuildSchema.default({}),
        additionalUserContent: additionalUserContent,
    })
    .default({});
