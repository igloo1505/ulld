import { prisma } from '@ulld/database'
import fs from 'fs'
import path from 'path'


export const backupQAPairAndExams = async () => {
    let pairs = await prisma.qAPair.findMany({
        include: {
            tags: true,
            topics: true,
            subjects: true,
            practiceExam: true
        }
    })

    let exams = await prisma.practiceExam.findMany({
        include: {
            tags: true,
            subjects: true,
            topics: true,
            questions: {
                select: {
                    id: true
                }
            }
        }
    })
    if (!pairs) return
    let _json = {
        data: {
            qaPairs: pairs.map((p) => ({
                ...p,
                tags: p.tags.map((t) => t.value),
                subject: p.subjects.map((s) => s.value),
                topic: p.topics.map((l) => l.value)
            })),
            exams: exams.map((x) => ({
                ...x,
                topics: x.topics.map((t) => t.value),
                subjects: x.subjects.map((s) => s.value),
                tags: x.tags.map((t) => t.value),
            }))
        }
    }

    await fs.promises.writeFile(path.join(process.cwd(), "backup/qaPairAndExams.json"), JSON.stringify(_json), { encoding: "utf-8" })
}
