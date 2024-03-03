import { zodCitationGroupSchema } from "#/lib/parsing/serverOnly/mdxNoteWithLatexServerSideZodObject";
import type { BibEntryReturned, CitationGroupReturned } from "#/types/prisma/bib/returnTypes";
import { BibEntry, type BibEntryPrismaAcceptedTypes } from "./BibEntry";
import { CitationGroupProtocol } from "./protocols/citationGroup";
import type { Prisma, CitationsGroup as PrismaCitationGroup } from "@prisma/client"



export class CitationGroup extends CitationGroupProtocol {
    entries: BibEntry[] = []
    constructor(public name: string, public description?: string, entries: BibEntryPrismaAcceptedTypes[] = []) {
        super()
        entries && (this.entries = BibEntry.fromList(entries))
    }

    toPlainObject() {
        return zodCitationGroupSchema.parse(this)
    }

    whereUniqueInput() {
        let d: Prisma.CitationsGroupWhereUniqueInput = {
            name: this.name
        }
        return d
    }

    whereInput() {
        let d: Prisma.CitationsGroupWhereUniqueInput = {
            name: this.name
        }
        return d
    }
    createInput() {
        let d: Prisma.CitationsGroupCreateInput = {
            name: this.name,
            description: this.description,
            entries: {
                connectOrCreate: this.entries.map((t) => t.connectOrCreate())
            }
        }
        return d
    }

    createArgs() {
        let d: Prisma.CitationsGroupCreateArgs = {
            data: this.createInput()
        }
        return d
    }

    upsertArgs() {
        let ci = this.createInput()
        let d: Prisma.CitationsGroupUpsertArgs = {
            where: {
                name: this.name
            },
            create: ci,
            update: ci
        }
        return d
    }
    connectOrCreateArgs() {
        let d: Prisma.CitationsGroupCreateOrConnectWithoutEntriesInput = {
            where: {
                name: this.name
            },
            create: this.createInput()
        }
        return d
    }
    static fromPrisma(entry: NonNullable<CitationGroupReturned> | PrismaCitationGroup & { entries: undefined } | Partial<NonNullable<BibEntryReturned>['citationGroups'][number]>) {
        let newGroup = new CitationGroup(entry.name || "", entry.description || undefined, entry.entries || [])
        return newGroup
    }
    static fromList(items: (PrismaCitationGroup & { entries?: undefined } | CitationGroup | Partial<NonNullable<BibEntryReturned>['citationGroups'][number]>)[] | null | undefined): CitationGroup[] {
        if (!items || items.length === 0) return []
        return items.map((item) => item instanceof CitationGroup ? item : CitationGroup.fromPrisma(item))
    }
}



