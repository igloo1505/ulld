import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { prisma } from "@ulld/database";


export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest){
        const appConfig = await readAppConfig()
        try {
            let filename = req.nextUrl.searchParams.get("filename")
            if (!filename) {
                const bibId = req.nextUrl.searchParams.get("bibId")
                if (!bibId) {
                    return new NextResponse(JSON.stringify({ success: false, msg: 'No bib filename provided.' }))
                }
                let bib;
                if (bibId) {
                    bib = await prisma.bib.findFirst({
                        where: { id: parseInt(bibId as string) || 1 },
                        select: {
                            filename: true
                        }
                    })
                }
                if (!bibId) {
                    bib = await prisma.bib.findFirst({ select: { filename: true } })
                }
                if (!bib) {
                    return new NextResponse(JSON.stringify({ success: false }))
                }
                if (bib?.filename) {
                    filename = bib.filename as string
                }
                return new NextResponse(JSON.stringify({ success: false, msg: 'No bib filename provided.' }))
            }
            const fp = path.join(appConfig.fsRoot, `/${filename}`)
            const data = fs.readFileSync(fp, {
                encoding: "utf8"
            })
            return new NextResponse(JSON.stringify({ bib: data }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
}
