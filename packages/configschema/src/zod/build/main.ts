import { z } from "zod";
import { databaseBuildSchema } from "./database/database";
import { additionalUserContent } from "./additional/additionalUserContent";

export const buildOnlySchema = z
    .object({
        database: databaseBuildSchema.default({}),
        additionalUserContent: additionalUserContent,
    })
    .default({});
