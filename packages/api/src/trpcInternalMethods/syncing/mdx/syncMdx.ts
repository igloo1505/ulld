import { prisma } from "#/db"
import { AutoSettingWithRegex } from "#/trpc/routers/sync"
import { getInternalConfig } from "@ulld/config"
import fs from 'fs'
import { Prisma } from "@ulld/database"
import { SyncOptions } from "#/schemas/syncing/syncOptions"
import { saveMdxNote } from "./saveMdxNote"
import { updateMdxNote } from "./updateMdx"
import { MdxNote } from "#/classes"

export const syncMdx = async (file: string, dir: string, autoSettings: AutoSettingWithRegex[], opts?: SyncOptions) => {
    const config = getInternalConfig()
    let s = fs.readFileSync(file, { encoding: "utf-8" })
    console.log(`Syncing note with filepath: ${file.split(dir)[1]}`)
    let note = await MdxNote.fromMdxString({ content: s, rootRelativePath: file.split(dir)[1] })
    await note.parse()
    if (note.remoteUrl && note.trackRemote && opts?.offline !== false) {
        // There has to be a better way of doing this without parsing this twice, but the downside of parsing front matter separately every single time for the <1% of notes that are likely to be remote might be much worse.
        await note.populateFromRemote()
        await note.parse()
    }

    let checkExistsArgs: Prisma.MdxNoteFindFirstArgs = {
        where: {
            OR: [
                { content: note.raw },
                { rootRelativePath: note.rootRelativePath }
            ]
        }
    }

    let exists = await prisma.mdxNote.findFirst(checkExistsArgs)
    if (exists && note.rootRelativePath !== exists.rootRelativePath) {
        note.setNoteType()
        note.rootRelativePath = exists.rootRelativePath
    }

    if (exists !== null) {
        note.id = exists.id
        return updateMdxNote(note, autoSettings, config)
    } else {
        return saveMdxNote(note, autoSettings, config)
    }
}
