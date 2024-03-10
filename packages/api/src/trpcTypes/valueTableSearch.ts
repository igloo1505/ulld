import { DocTypes } from "@ulld/configschema"

export interface ValueSearchTableItem {
    href: string
    title: string
    rootRelativePath: string
    noteType: DocTypes | "none"
    importantValues: number[]
    firstSync: Date | null
    lastSync: Date | null
}
