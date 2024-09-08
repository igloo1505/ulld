import { RequestContext } from "next/dist/server/base-server";
import { type NextRequest, NextResponse } from "next/server";
export declare const getCorsHeaders: (req: NextRequest | Request, _status?: number) => {
    status: number;
    headers: {
        "Access-Control-Allow-Origin": string;
        "Content-Type": string;
        'Access-Control-Allow-Methods': string;
        'Access-Control-Allow-Headers': string;
    };
};
export declare const optionsMethodResponse: (req: NextRequest | Request, ctx: RequestContext) => Promise<NextResponse<unknown>>;
//# sourceMappingURL=cors.d.ts.map