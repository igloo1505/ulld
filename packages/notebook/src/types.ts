export interface NotebookProps {
    rootRelativePath: string;
    prefer?: "fs" | "db";
    content: object;
    initialDarkMode?: boolean
}
