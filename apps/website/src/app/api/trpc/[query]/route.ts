import { appRouter, extendAppRouter } from "@ulld/api/appRouter";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { publicProcedure, router } from "@ulld/api";
import { extendedAppRouter } from "#/trpc/main";

// const handler = () => {
//
//     }


const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: extendedAppRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
