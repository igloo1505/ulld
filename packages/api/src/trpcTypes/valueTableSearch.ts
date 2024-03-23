import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"

export interface ValueSearchTableItem {
    href: string
    title: string
    rootRelativePath: string
    noteType: DocTypes | "none"
    importantValues: number[]
    firstSync: Date | null
    lastSync: Date | null
}
