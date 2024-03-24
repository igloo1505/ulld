import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"
import { WithFSSearchParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams"
import {getPathnameFromHeaders} from "@ulld/api/trpcInternalMethods/filesystem/getPathnameFromHeaders"
import {SpecificNoteQueryManager} from "@ulld/api/classes/specificNoteQuery/specificNoteQueryManager"




export const formatNoteProps = async <T extends WithFSSearchParams>(docType: DocTypes, params: T["params"], searchParams: WithFSSearchParams["searchParams"]) => {
    let props = {
        slug: Array.isArray(params.slug) ? params.slug.join("/") : params.slug,
        docType,
        preferFs: Boolean(searchParams?.fs),
        searchParams: searchParams
    }
    let pathname = getPathnameFromHeaders()
    let manager = new SpecificNoteQueryManager(props, props.docType, undefined, pathname)
    let noteProps = await manager.run()
    return {
        ...props,
        noteProps: noteProps
    }
}


export type NotePageProps = Awaited<ReturnType<typeof formatNoteProps>>
