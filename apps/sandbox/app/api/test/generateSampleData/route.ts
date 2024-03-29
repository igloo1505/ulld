import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "@ulld/database/db";
import fs from "fs";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

const writeData = async (completeData: Record<string, any>) => {
    return await fs.promises.writeFile(
        "/Users/bigsexy/Desktop/currentProjects/ulld/packages/api/src/__tests__/testData/testData.json",
        JSON.stringify(completeData, null, 4),
        { encoding: "utf-8" },
    );
};

router.get(async (req, ctx) => {
    try {
        let sampleData: Record<string, any> = {};
        const sampleNotes = await prisma.mdxNote.findMany({
            take: 5,
        });
        const sampleTags = await prisma.tag.findMany({
            take: 5,
        });
        const sampleTopics = await prisma.topic.findMany({
            take: 5,
        })
        const sampleSubjects = await prisma.subject.findMany({
            take: 5,
        });
        const sampleAutoSettings = await prisma.autoSetting.findMany({
            take: 5,
        });

        const sampleBibEntries = await prisma.bibEntry.findMany({
            take: 10,
        });

        const sampleBib = await prisma.bib.findMany({ take: 5 });
        const sampleCitationsGroup = await prisma.citationsGroup.findMany({
            take: 5,
        });

        const sampleSnippets = await prisma.snippet.findMany({
            take: 5,
        });

        const sampleRelatedValues = await prisma.relatedValues.findMany({
            take: 5
        })

        const sampleEquations = await prisma.equation.findMany({
            take: 5
        })

        const sampleDefinitions = await prisma.definition.findMany({
            take: 5
        })

        const sampleSettings = await prisma.settings.findFirst({})

        const sampleQAPairs = await prisma.qAPair.findMany({
            take: 5
        })

        const samplePracticeExam = await prisma.practiceExam.findMany({
            take: 5
        })

        const sampleSequentialNotesList = await prisma.sequentialNoteList.findMany({
            take: 5
        })

        const sampleIpynbNotes = await prisma.ipynb.findMany({
            take: 5
        })

        const sampleTodoLists = await prisma.toDoList.findMany({
            take: 3
        })

        const sampleTodos = await prisma.toDo.findMany({
            take: 10
        })

        const sampleKanBanLists = await prisma.kanBanList.findMany({take: 5})
        const sampleKanBans = await prisma.kanban.findMany({take: 5})
        const sampleKanBanCards = await prisma.kanBanCard.findMany({take: 5})

        const sampleTimePeriods = await prisma.timePeriod.findMany({take: 5})
        const sampleDiets = await prisma.diet.findMany({take: 5})
        const sampleServings = await prisma.serving.findMany({take: 5})
        const sampleDietaryItems = await prisma.dietaryItem.findMany({take: 5})
        const sampleHealthReports = await prisma.healthReport.findMany({take: 5})

        sampleData.mdxNotes = sampleNotes;
        sampleData.tags = sampleTags;
        sampleData.subjects = sampleSubjects;
        sampleData.topics = sampleTopics
        sampleData.autoSettings = sampleAutoSettings;
        sampleData.bibEntries = sampleBibEntries;
        sampleData.citationsGroup = sampleCitationsGroup;
        sampleData.bib = sampleBib;
        sampleData.snippets = sampleSnippets;
        sampleData.relatedValues = sampleRelatedValues;
        sampleData.equation = sampleEquations;
        sampleData.definitions = sampleDefinitions;
        sampleData.settings = sampleSettings; 
        sampleData.practiceExams = samplePracticeExam
        sampleData.qaPairs = sampleQAPairs
        sampleData.sequentialNoteLists = sampleSequentialNotesList
        sampleData.ipynbNotes = sampleIpynbNotes
        sampleData.todoLists = sampleTodoLists
        sampleData.todos = sampleTodos
        sampleData.kanbanList = sampleKanBanLists
        sampleData.kanbans =  sampleKanBans 
        sampleData.kanbanCards =  sampleKanBanCards 
        sampleData.timePeriod = sampleTimePeriods
        sampleData.diets = sampleDiets
        sampleData.servings = sampleServings
        sampleData.dietaryItem = sampleDietaryItems
        sampleData.healthReport = sampleHealthReports
        await writeData(sampleData);
        return new NextResponse(JSON.stringify({ success: true }));
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
});

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse<unknown>>;
}
