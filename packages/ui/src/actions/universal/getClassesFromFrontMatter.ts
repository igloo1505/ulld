import type { FrontMatterType } from "@ulld/types"


export const getClassesFromFrontMatter = (d?: Partial<FrontMatterType>): string => {
    if (!d) return ""
    let s: string[] = []
    d.tableStyles?.text && (s.push(`table-text-${d.tableStyles.text}`))
    d.tableStyles?.noMax && (s.push(`table-no-max-dims`))
    d.tableStyles?.expand && (s.push("table-expand"))
    d.tableStyles?.math && (s.push(`table-math-text-${d.tableStyles.math}`))
    d.tableStyles?.fullWidth && (s.push(`table-fullWidth`))
    d.tableStyles?.float && (s.push(`table-float-${d.tableStyles.float}`))
    d.tableStyles?.tableCenter && (s.push(`table-center`))
    d.tableStyles?.textCenter && (s.push(`table-text-center`))
    d.tableStyles?.headingCenter && (s.push('table-heading-center'))
    return s.join(" ")
}


