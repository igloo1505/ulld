import { z } from "zod";
import { postgresConfigSchema } from "./postgres";

export enum ULLDSupportedDatabases {
    postgres = "Postgres",
    sqlite = "SQLite",
}

export const databaseBuildSchema = z
    .object({
        type: z
            .nativeEnum(ULLDSupportedDatabases)
            .default(ULLDSupportedDatabases.sqlite),
        postgres: postgresConfigSchema,
        prioritize: z
            .union([z.literal("speed"), z.literal("size")])
            .default("speed"),
    })
    .default({})
    .refine(
        (data) =>
            !Boolean(data.type === ULLDSupportedDatabases.postgres && !data.postgres),
        {
            message:
                "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI.",
        },
    );
