export interface AutoSettingWithRegex {
    id?: number
    glob: RegExp
    globString: string
    type: "tag" | "topic" | "subject",
    value: string
}
