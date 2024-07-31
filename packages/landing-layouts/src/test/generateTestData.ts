import { serverClient } from "@ulld/api/serverClient";

type ModularDashboardData = Awaited<ReturnType<typeof serverClient.universalNotes.getUserOverview>>

const getLastAccessNote = (i: number, firstSync: Date, categories: string[]): ModularDashboardData["lastAccessNotes"][number] => {
    let firstSyncVal = firstSync.valueOf()
    let _now = new Date().valueOf()
    let diff = _now - firstSyncVal
    let noteCreated = new Date(firstSyncVal + Math.floor(Math.random() * diff))
    let createdDiff = _now - noteCreated.valueOf()

       return {
        id: i + 1,
        firstSync: noteCreated,
        lastSync: new Date(noteCreated.valueOf() + Math.floor(Math.random() * createdDiff)),
        lastAccess: new Date(noteCreated.valueOf() + Math.floor(Math.random() * createdDiff)),
        title: "Some random title here",
        /* @ts-ignore */
        noteType: categories[Math.floor(Math.random() * categories.length)],
        type: Math.random() > 0.5 ? "notebook" : "mdxNote",
        href: "/"
    }
}

export const getModularDashboardTestData = (nNotesRandomizer: number = 200): ModularDashboardData => {
    let categories = "Math Physics Science Chemistry English Journal Cookbook".split(" ")
    const firstSync = new Date("2/15/21")
    let sampleNotes = Array(Math.floor(Math.random() * nNotesRandomizer)).fill(0).map((_, i) => getLastAccessNote(i, firstSync, categories)).sort((a, b) => a.lastSync < b.lastSync ? -1 : 1)
    let mdxNotes = sampleNotes.filter((a) => a.type === "mdxNote")
    let notebooks = sampleNotes.filter((a) => a.type === "notebook")
    let data: ModularDashboardData = {
        overallFirstSync: firstSync,
        totalNotes: {
            mdx: mdxNotes.length,
            notebook: notebooks.length,
            total: mdxNotes.length + notebooks.length
        },
        uniqueNoteTypes: categories,
        lastAccessNotes: sampleNotes
    }

    return data
}
