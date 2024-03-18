"use client"
import React from 'react'
import type { EditorLanguage } from 'monaco-editor/esm/metadata';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@ulld/tailwind/select';
import { supportedLanguages } from './staticData';


interface CodeEditorLanguageSelectProps {
    value: EditorLanguage
    onChange: (newLang: EditorLanguage) => void
}


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
                    {supportedLanguages.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


CodeEditorLanguageSelect.displayName = "CodeEditorLanguageSelect"


export default CodeEditorLanguageSelect;
