// TODO: Come back here and handle advanced json support mentioned here: https://www.npmjs.com/package/monaco-editor/v/0.5.3
const limitedMonacoSupportedLanguages = [
    "bat",
    "coffee script",
    "cpp",
    "csharp",
    "css",
    "fsharp",
    "go",
    "ini",
    "jade",
    "javascript",
    "json",
    "less",
    "lua",
    "objective-c",
    "powershell",
    "python",
    "r",
    "ruby",
    "scss",
    "sql",
    "swift",
    "typescript",
] as const;

export default limitedMonacoSupportedLanguages;
