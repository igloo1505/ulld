import { IpynbPropsOutput, IpynbRemotePropsOutput } from "./schemas/ipynbPropsSchema"
import {Prisma} from "@ulld/database/internalDatabaseTypes"


// TODO: Handle this entire Ipynb class from scratch again. Should be able to save note content to DB for portability as well as eventually parsing ipynb content to Html or pdf output.
export class IpynbNote {
    filepath?: string | null
    content: string
    rootRelativePath?: string | null
    title?: string | null
    constructor(props: IpynbPropsOutput | IpynbRemotePropsOutput) {
        this.filepath = props.filepath
        this.content = props.content
    }
    connectOrCreateArgs(): Prisma.IpynbCreateOrConnectWithoutTagsInput {
        // return {
            // content: this.content
        // }
    }
}
