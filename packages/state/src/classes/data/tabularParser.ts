type ParsableFileFormats = "csv" /// Obviously going to add more here.
import { parse } from 'csv-parse'

const FilePathMap: { [k in ParsableFileFormats]: string } = {
    csv: "/resources/csv"
}
export const getFilepath = (file: string) => {
    let ext = file.split(".").at(-1)
    return FilePathMap[ext as keyof typeof FilePathMap]
}

export class TabularDataHandler {
    rows: any[] = []
    constructor(public fileContent: string, fileName: string) { }

    parse_csv() {
        const parser = parse({
            delimiter: ","
        })
        parser.on("readable", () => {
            let record;
            while ((record = parser.read()) !== null) {
                this.rows.push(record);
            }
        })
    }
}
