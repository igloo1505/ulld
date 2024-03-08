import React, { useEffect, useState } from 'react'
import { EditorLanguage } from 'monaco-editor/esm/metadata';
import { ChevronsUpDown, Check, Command } from 'lucide-react';
import clsx from 'clsx';
import { CommandInput, CommandEmpty, CommandGroup, CommandItem, Popover, PopoverTrigger, PopoverContent, Button } from "@ulld/tailwind/base"
import { setInitialMonacoProps } from '@ulld/state';


const monacoEditoSupportedLanguageList: EditorLanguage[] = [
    'abap', 'apex', 'azcli', 'bat', 'bicep', 'cameligo', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'cypher', 'dart', 'dockerfile', 'ecl', 'elixir', 'flow9', 'freemarker2', 'fsharp', 'go', 'graphql', 'handlebars', 'hcl', 'html', 'ini', 'java', 'javascript', 'json', 'julia', 'kotlin', 'less', 'lexon', 'liquid', 'lua', 'm3', 'markdown', 'mdx', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'pla', 'postiats', 'powerquery', 'powershell', 'protobuf', 'pug', 'python', 'qsharp', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scala', 'scheme', 'scss', 'shell', 'solidity', 'sophia', 'sparql', 'sql', 'st', 'swift', 'systemverilog', 'tcl', 'twig', 'typescript', 'vb', 'wgsl', 'xml', 'yaml'
]

interface MonacoEditorLanguageSelectProps {
    value: EditorLanguage | null | undefined
    onChange: (value: EditorLanguage | null | undefined) => void
    buttonClasses?: string
    placeholder?: string
    emptyText?: string
    groupClasses?: string
    maxHeight?: number
}

const MonacoEditorLanguageSelect = ({ value, onChange, buttonClasses, placeholder, emptyText, groupClasses, maxHeight }: MonacoEditorLanguageSelectProps) => {
    useEffect(() => {
        setInitialMonacoProps()
    }, [])
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={clsx(
                        "w-[200px] justify-between",
                        !value && "text-muted-foreground",
                        buttonClasses
                    )}
                >
                    {value || placeholder || "Language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-[200px] p-0"
            >
                <Command>
                    <CommandInput placeholder={"search..."} />
                    <CommandEmpty>{emptyText || "Nothing was found"}</CommandEmpty>
                    <CommandGroup
                        className={clsx(maxHeight && "overflow-y-auto no-scrollbar", groupClasses)}
                        style={{
                            ...(maxHeight && {
                                maxHeight: `${maxHeight}px`
                            })
                        }}
                    >
                        {monacoEditoSupportedLanguageList.map((o) => (
                            <CommandItem
                                value={o}
                                key={o}
                                onSelect={(v) => {
                                    let val = monacoEditoSupportedLanguageList.find((a) => a.toLowerCase() === v)
                                    onChange(val)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={clsx(
                                        "mr-2 h-4 w-4",
                                        o === value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {o}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


MonacoEditorLanguageSelect.displayName = "MonacoEditorLanguageSelect"


export default MonacoEditorLanguageSelect;
