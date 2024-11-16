import { NextResponse } from "next/server";
import { getCorsHeaders, optionsMethodResponse } from "@ulld/utilities/cors";
import { cookies } from "next/headers";


export async function POST(req: Request) {
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
}


export const OPTIONS = optionsMethodResponse
