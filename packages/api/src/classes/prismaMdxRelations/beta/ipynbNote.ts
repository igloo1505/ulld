import { IpynbPropsOutput, IpynbRemotePropsOutput } from "./schemas/ipynbPropsSchema"

export class IpynbNote {
    filepath?: string | null
    content: string
    constructor(props: IpynbPropsOutput | IpynbRemotePropsOutput) {
        this.filepath = props.filepath
        this.content = props.content
    }
}
