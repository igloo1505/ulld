import { prisma } from "@ulld/database/db";

export const getUniqueTags = async (): Promise<string[]> => {
    let data = await prisma.tag.findMany({
        distinct: "value",
        orderBy: {
            lastAccess: "desc"
        }
    });
    return data.map((d) => d.value);
};

export const getUniqueSubjects = async (): Promise<string[]> => {
    let data = await prisma.subject.findMany({
        distinct: "value",
        orderBy: {
            lastAccess: "desc"
        }
    });
    return data.map((d) => d.value);
};

export const getUniqueTopics = async (): Promise<string[]> => {
    let data = await prisma.topic.findMany({
        distinct: "value",
        orderBy: {
            lastAccess: "desc"
        }
    });
    return data.map((d) => d.value);
};
