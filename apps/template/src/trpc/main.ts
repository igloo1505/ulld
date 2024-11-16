// TODO: Resolve the issues with extending the trpc client. It's working great in the web app, but for some reason causes 'Cannot access 'appRouter' before initialization' issues in the compiled app.
export { client } from "@ulld/api/client";

// import { extendAppRouter } from "@ulld/api/extend";
// import type { InternalTrpcRouter } from "./internalRouter";

// const globalTrpc = global as unknown as {
//     client: ReturnType<typeof extendAppRouter<InternalTrpcRouter>>["client"];
// };

// const { client } = Boolean(globalTrpc.client)
//     ? { client: globalTrpc.client }
//     : extendAppRouter<InternalTrpcRouter>();

// globalTrpc.client = client;

// export { client };
