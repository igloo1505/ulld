import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { internalTrpcRouter } from "#/trpc/internalRouter";


const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: internalTrpcRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
