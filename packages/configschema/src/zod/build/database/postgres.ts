import { z } from "zod";

export const postgresConfigSchema = z
    .object({
        port: z.coerce.number().int().default(5432),
        dbName: z.string().default("ulld"),
        connectionURI: z.string().default(""),
    })
    .default({})
    .refine((data) =>
        Boolean(data.connectionURI !== "" || (data.port && data.dbName)),
    )
    .transform((data) => {
        if (data.connectionURI && data.connectionURI !== "") {
            return {
                connectionURI: data.connectionURI,
            };
        }
        return {
            port: data.port,
            dbName: data.dbName,
        };
    });
