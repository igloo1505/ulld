import { RequestContext } from "next/dist/server/base-server"
import { type NextRequest, NextResponse } from "next/server"

export const getCorsHeaders = (req: NextRequest | Request, _status: number = 200) => {
    const origin = req.headers.get("origin") || "*"
    return {
        status: _status,
        headers: {
            "Access-Control-Allow-Origin": origin,
            "Content-Type": "application/json",
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    }
}

export const optionsMethodResponse = async (req: NextRequest | Request, ctx: RequestContext) => {
    return new NextResponse(null, getCorsHeaders(req))
}
