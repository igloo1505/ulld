// ULLD_BUILD_PROCESS: Add exported trpc routers here.
import { publicProcedure } from "@ulld/api";

export const generatedRouter = {
    dummyRoute: publicProcedure.query(async () => "Useless")
}
