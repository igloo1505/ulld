import { documentTypeConfigSchemaBase } from '@ulld/configschema'
import { zodCoerceToDate } from '@ulld/utilities'
import { z } from 'zod'



export const locationDataItem = z.object({
    noteType: z.string(),
    bookmarked: z.boolean().default(false),
    lastSync: z.coerce.date()
})


export const noteTypeOverviewSchema = documentTypeConfigSchemaBase.pick({
    label: true,
    url: true,
    id: true,
    docType: true
}).extend({
    totalNotes: z.number(),
    lastUpdated: zodCoerceToDate(false)
})


export type NoteTypeOverview = z.output<typeof noteTypeOverviewSchema>


