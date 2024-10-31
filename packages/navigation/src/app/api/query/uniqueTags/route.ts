import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@ulld/database";


export async function GET(req: NextRequest){
        try {
            const _tags = await prisma.tag.findMany({})
            let tags = _tags.map((t) => t.value)
            let _subjects = await prisma.subject.findMany({})
            let subjects = _subjects.map((t) => t.value)
            let _topics = await prisma.topic.findMany({})
            let topics = _topics.map((t) => t.value)
            return new NextResponse(JSON.stringify({ tags, subjects, topics }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}
