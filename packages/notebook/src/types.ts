export interface NotebookProps {
    rootRelativePath: string;
    prefer?: "fs" | "db";
    content: object | string;
    initialDarkMode?: boolean
}
