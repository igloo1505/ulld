import { appRouter, extendAppRouter } from "@ulld/api/appRouter";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { publicProcedure, router } from "@ulld/api";
import { internalTrpcRouter } from "#/trpc/internalRouter";

// const handler = () => {
//
//     }


const extendedAppRouter = extendAppRouter<typeof internalTrpcRouter>(internalTrpcRouter);


const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: extendedAppRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
