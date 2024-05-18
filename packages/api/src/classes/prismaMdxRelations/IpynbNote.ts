import { IpynbPropsOutput, IpynbRemotePropsOutput } from "./schemas/ipynbPropsSchema"
import {Prisma} from "@ulld/database/internalDatabaseTypes"



// TODO: Handle this entire Ipynb class from scratch again. Should be able to save note content to DB for portability as well as eventually parsing ipynb content to Html or pdf output.
export class IpynbNote {
    id?: number
    filepath?: string | null
    content: string
    rootRelativePath: string
    title?: string | null
    latexTitle?: string
    href: string
    constructor(props: IpynbPropsOutput | IpynbRemotePropsOutput) {
        this.filepath = props.filepath
        this.content = props.content
        this.rootRelativePath = props.rootRelativePath ? props.rootRelativePath : props.remoteUrl as string
        this.href = props.href as string
    }
    connectOrCreateArgs(): Prisma.IpynbCreateOrConnectWithoutTagsInput {
        return {
            where: {
                id: this.id || -1,
            },
            create: {
                href: this.href,
                title: this.title || "--",
                latexTitle: this.latexTitle,
                rootRelativePath: this.rootRelativePath,
                raw: new Buffer(this.content, "utf-8")
            }
        }
    }
}
