import { appRouter } from "@ulld/api/appRouter";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextResponse } from "next/server";

const handler = (req: Request) => fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({

    })
})


// const handler = async () => {
//     return new NextResponse(JSON.stringify({success: "What the flying fuck"}), {status: 200})
//     }

export { handler as GET, handler as POST }
