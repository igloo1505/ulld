

export type ParsableExtensions = ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md" | ".mdx" | ".ipynb"

export type NotePropertiesOutput = ({
    useFs: true
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension: string
    absolutePath: string
}) | ({
    useFs: false
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension?: string
    absolutePath?: string
})
