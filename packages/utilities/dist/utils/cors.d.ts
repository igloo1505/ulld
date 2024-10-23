import { type NextRequest, NextResponse } from "next/server";
export declare const getCorsHeaders: (req: NextRequest | Request, _status?: number) => {
    status: number;
    headers: Record<string, string>;
};
export declare const optionsMethodResponse: (req: NextRequest | Request) => Promise<NextResponse>;
//# sourceMappingURL=cors.d.ts.map