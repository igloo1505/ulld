import path from "path"
import { JsonFile } from "@ulld/utilities/jsonFileClass"
import { prisma } from "@ulld/database"
import { NextResponse } from 'next/server'

export async function GET() {
    let dataPath = path.join(process.env.ULLD_DEV_ROOT!, "buildUtils/baseAppData.json")
    let jsonFile = new JsonFile(dataPath)
    let content = jsonFile.getJsonContent() as any
    await prisma.toDoList.deleteMany({})
    await prisma.toDo.deleteMany({})
    await prisma.equation.deleteMany({})
    await prisma.snippet.deleteMany({})
    for await (const snippet of content["snippets"]) {
        delete snippet.id
        await prisma.snippet.create({
            data: snippet
        })
    }
    for await (const equation of content["equations"]) {
        delete equation.id
            await prisma.equation.create({
                data: equation
            })
    }

    for (const taskList of content["ToDoList"]) {
        await prisma.toDoList.create({ data: taskList })
    }

    for (const task of content["ToDo"]) {
        await prisma.toDo.create({ data: task })
    }
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 })
}
