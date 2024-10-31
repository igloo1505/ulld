import { serverClient } from "@ulld/api/serverClient";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        let { id }: { id: number } = await req.json();
        if (!id) {
            return new NextResponse(
                JSON.stringify(
                    {
                        success: false,
                        msg: "No id provided to /utils/toggles/bookmarked route.",
                    },
                    null,
                    4,
                ),
                {
                    status: 500,
                },
            );
        }
        await serverClient.mdx.toggleBookmarkedById(id);
        return new NextResponse(JSON.stringify({ success: true }, null, 4), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
