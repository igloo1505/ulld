import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getCorsHeaders, optionsMethodResponse } from "@ulld/utilities/cors";
import { cookies } from "next/headers";


interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            let { online }: { online: boolean } = await req.json()
            let cookieJar = cookies()
            cookieJar.set("onlineStatus", online ? "online" : "offline")
            let res = new NextResponse(JSON.stringify({ success: true }), getCorsHeaders(req, 200));
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>
}

export const OPTIONS = optionsMethodResponse
