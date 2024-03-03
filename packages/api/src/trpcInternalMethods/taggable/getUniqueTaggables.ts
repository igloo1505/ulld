import { prisma } from "#/db"

export const getUniqueTags = async (): Promise<string[]> => {
    let data = await prisma.tag.findMany({
        distinct: "value"
    })
    return data.map((d) => d.value)
}


export const getUniqueSubjects = async (): Promise<string[]> => {
    let data = await prisma.subject.findMany({
        distinct: "value"
    })
    return data.map((d) => d.value)
}


export const getUniqueTopics = async (): Promise<string[]> => {
    let data = await prisma.topic.findMany({
        distinct: "name"
    })
    return data.map((d) => d.name)
}
