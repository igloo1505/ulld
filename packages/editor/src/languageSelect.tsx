"use client"
import React from 'react'
import type { EditorLanguage } from 'monaco-editor/esm/metadata';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '#/components/shad/ui/select';


interface CodeEditorLanguageSelectProps {
    value: EditorLanguage
    onChange: (newLang: EditorLanguage) => void
}

const options = [
    'abap', 'apex', 'azcli', 'bat', 'bicep', 'cameligo', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'cypher', 'dart', 'dockerfile', 'ecl', 'elixir', 'flow9', 'freemarker2', 'fsharp', 'go', 'graphql', 'handlebars', 'hcl', 'html', 'ini', 'java', 'javascript', 'json', 'julia', 'kotlin', 'less', 'lexon', 'liquid', 'lua', 'm3', 'markdown', 'mdx', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'pla', 'postiats', 'powerquery', 'powershell', 'protobuf', 'pug', 'python', 'qsharp', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scala', 'scheme', 'scss', 'shell', 'solidity', 'sophia', 'sparql', 'sql', 'st', 'swift', 'systemverilog', 'tcl', 'twig', 'typescript', 'vb', 'wgsl', 'xml', 'yaml'
]

const CodeEditorLanguageSelect = ({ value, onChange }: CodeEditorLanguageSelectProps) => {
    return (
        <Select
            value={value}
            onValueChange={onChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className={"max-h-[50vh]"}>
                <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


CodeEditorLanguageSelect.displayName = "CodeEditorLanguageSelect"


export default CodeEditorLanguageSelect;
