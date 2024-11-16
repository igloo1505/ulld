// TODO: Come back and resolve the issue with extending the trpc router when back on wifi, and ideally in air conditioning because this sucks ass.
export { serverClient} from "@ulld/api/serverClient"
export { appRouter } from "@ulld/api/appRouter"
// import { extendServerClient } from "@ulld/api/extendServerClient";
// import { internalTrpcRouter, InternalTrpcRouter } from "./internalRouter";

// const globalTrpc = global as unknown as {
//     appRouter: ReturnType<
//         typeof extendServerClient<typeof internalTrpcRouter>
//     >["appRouter"];
//     serverClient: ReturnType<
//         typeof extendServerClient<typeof internalTrpcRouter>
//     >["serverClient"];
// };

// export const { appRouter, serverClient } = Boolean(
//     globalTrpc.appRouter && globalTrpc.serverClient,
// )
//     ? { appRouter: globalTrpc.appRouter, serverClient: globalTrpc.serverClient }
//     : extendServerClient<InternalTrpcRouter>(internalTrpcRouter);
