"use client"
import { Command } from 'cmdk'
import React, { useEffect, useRef, useState } from 'react'
import DefaultCommandPaletteItems from './defaultCommands'
import "./commandPaletteStyles.scss"
import { SearchIcon } from 'lucide-react'
import NoteSearchCommandGroup, { NoteSearchItem } from './groups/noteSearch'
import TagSearchCommandGroup from './groups/tagSearch'
import clsx from 'clsx'
import EquationSearchCommandGroup, { EquationCmdItem } from './groups/equationSearch'
import DefinitionSearchCommandGroup, { DefCmdItem } from './groups/definitionSearch'
import { sideBySidePages, pageMap, pages as pageList, pages } from './commandPaletteUtilities'
import CommandPaletteMarkdownPanel from './commandPaletteMarkdownPanel'
import SubjectSearchCommandGroup from './groups/subjectSearch'
import { client } from '@ulld/api'
import { makeValidId } from '@ulld/utilities'
import { defaultCommandList } from '.'
import { MathDisplayCLIENT } from '..'


interface CommandPaletteProps {
    open: boolean
    search: string
    setSearch: (s: string) => void
    setOpen: (b: boolean) => void
    setPages: (s: pageList[]) => void
    pages: pageList[]
    page?: pageList
    loading: boolean
    setLoading: (b: boolean) => void
}

type TagCmdItem = { label: string, value: string }
type SubjectSearchItem = TagCmdItem
type TodoListCmdItem = TagCmdItem



/* PERFORMANCE: Move the async queries to a localstorage function. Populate from the localstorage  or index'd DB immediately, and then regenerate and re-render from async function on each load to ensure fresh data. */
const CommandPalette = ({ search, page: _page, loading, setLoading, pages, setOpen, setPages, setSearch }: CommandPaletteProps) => {
    const pageRef = useRef<typeof _page>(_page)
    useEffect(() => {
        pageRef.current = _page
    }, [_page])


    const equationSearchCommandsRef = useRef<EquationCmdItem[]>([])
    const [equationSearchCommands, _setEquationSearchCommands] = useState<EquationCmdItem[]>([])
    const setEquationSearchCommands = (data: EquationCmdItem[]) => {
        equationSearchCommandsRef.current = data
        _setEquationSearchCommands(data)
    }

    const definitionSearchCommandsRef = useRef<DefCmdItem[]>([])
    const [definitionSearchCommands, _setDefinitionSearchCommands] = useState<DefCmdItem[]>([])
    const setDefinitionSearchCommands = (data: DefCmdItem[]) => {
        definitionSearchCommandsRef.current = data
        _setDefinitionSearchCommands(data)
    }


    const tagSearchCommandsRef = useRef<TagCmdItem[]>([])
    const [tagSearchCommands, _setTagSearchCommands] = useState<TagCmdItem[]>([])
    const setTagSearchCommands = (data: TagCmdItem[]) => {
        tagSearchCommandsRef.current = data
        _setTagSearchCommands(data)
    }


    const todoListSearchCommandsRef = useRef<TodoListCmdItem[]>([])
    const [todoListSearchCommands, _setTodoListSearchCommands] = useState<TodoListCmdItem[]>([])
    const setTodoListSearchCommands = (data: TodoListCmdItem[]) => {
        todoListSearchCommandsRef.current = data
        _setTodoListSearchCommands(data)
    }



    const noteSearchCommandsRef = useRef<NoteSearchItem[]>([])
    const [noteSearchCommands, _setNoteSearchCommands] = useState<NoteSearchItem[]>([])
    const setNoteSearchCommands = (data: NoteSearchItem[]) => {
        noteSearchCommandsRef.current = data
        _setNoteSearchCommands(data)
    }


    const subjectSearchCommandsRef = useRef<SubjectSearchItem[]>([])
    const [subjectSearchCommands, _setSubjectSearchCommands] = useState<SubjectSearchItem[]>([])
    const setSubjectSearchCommands = (data: SubjectSearchItem[]) => {
        console.log("data: ", data)
        subjectSearchCommandsRef.current = data
        _setSubjectSearchCommands(data)
    }



    const valueRef = useRef("")
    const [value, _setValue] = useState("")


    const setValue = (v: string) => {
        valueRef.current = v.toLowerCase()
        _setValue(v)
    }


    const gatherEquationCommands = async () => {
        setLoading(true)
        let data = await client.commandPalette.equationSearch.query()
        setLoading(false)
        setEquationSearchCommands(data.map((d) => ({
            ...d,
            value: `equation-${d.id}`
        })))
    }


    const gatherDefinitionCommands = async () => {
        setLoading(true)
        let definitionData = await client.commandPalette.getDefinitions.query({ rsc: false })
        setLoading(false)
        setDefinitionSearchCommands(definitionData.map((d) => ({
            ...d,
            label: d.label || d.id,
            value: `def-${d.id.toLowerCase()}`
        })))
    }


    const gatherTagCommands = async () => {
        setLoading(true)
        let noteData = await client.commandPalette.tagSearch.query()
        setLoading(false)
        setTagSearchCommands(noteData.map((t) => ({
            ...t,
            label: t.value,
            value: `tag-${t.value.toLowerCase()}`
        })))
    }


    const gatherSubjectCommands = async () => {
        setLoading(true)
        let subjects = await client.commandPalette.subjectSearch.query()
        setLoading(false)
        if (subjects) {
            setSubjectSearchCommands(subjects.map((t) => ({
                ...t,
                label: t.value,
                value: `subject-${makeValidId(t.value)}`
            })))
        }
    }


    useEffect(() => {
        if (_page === pageList.searchEquations) {
            gatherEquationCommands()
        } else if (_page === pageList.searchDefinitions) {
            gatherDefinitionCommands()
        } else if (_page === pageList.searchTags) {
            gatherTagCommands()
        } else if (_page === pageList.searchSubjects) {
            gatherSubjectCommands()
        }
    }, [_page])


    const getAdjacentValueMap: Omit<{
        [k in (pages | "none")]: (dir: "next" | "prev") => string | undefined
    }, "fullTextSearch" | "searchByValue"> = {
        none: (dir) => {
            let curIdx = defaultCommandList.map((d) => d.value.toLowerCase()).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? defaultCommandList.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === defaultCommandList.length - 1 ? 0 : curIdx + 1
            }
            return defaultCommandList[newIdx].value
        },
        searchEquations: (dir) => {
            let curIdx = equationSearchCommandsRef.current?.map((d) => d.value.toLowerCase()).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? equationSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === equationSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return equationSearchCommandsRef.current?.[newIdx]?.value
        },
        searchNotes: (dir) => {
            let curIdx = noteSearchCommandsRef.current?.map((d) => d.value).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? noteSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === noteSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return noteSearchCommandsRef.current?.[newIdx]?.value
        },
        searchDefinitions: (dir) => {
            let curIdx = definitionSearchCommandsRef.current?.map((d) => d.value.toLowerCase()).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? definitionSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === definitionSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return definitionSearchCommandsRef.current?.[newIdx]?.value
        },
        searchSubjects: (dir) => {
            let curIdx = subjectSearchCommandsRef.current?.map((d) => d.value).indexOf(valueRef.current)
            console.log("curIdx: ", curIdx)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? subjectSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === subjectSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return subjectSearchCommandsRef.current?.[newIdx]?.value
        },
        searchTags: (dir) => {
            let curIdx = tagSearchCommandsRef.current?.map((d) => d.value).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? tagSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === tagSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return tagSearchCommandsRef.current?.[newIdx]?.value
        },
        searchToDoLists: (dir) => {
            let curIdx = tagSearchCommandsRef.current?.map((d) => d.value).indexOf(valueRef.current)
            const tcur = typeof curIdx
            if (tcur === "undefined" || tcur !== "number") {
                return undefined
            }
            let newIdx: number = curIdx
            if (dir === "prev") {
                newIdx = curIdx === 0 ? tagSearchCommandsRef.current?.length - 1 : curIdx - 1
            } else {
                newIdx = curIdx === tagSearchCommandsRef.current?.length - 1 ? 0 : curIdx + 1
            }
            return tagSearchCommandsRef.current?.[newIdx]?.value
        },

    }


    const keyboardListener = (e: KeyboardEvent) => {
        console.log("page: ", _page, pageRef.current)
        let _key = pageRef.current || "none"
        if (_key in getAdjacentValueMap) {
            if (e.code === "KeyJ" && e.altKey) {
                e.preventDefault()
                let newValue = getAdjacentValueMap[_key as keyof typeof getAdjacentValueMap]("next")
                console.log("newValue: ", newValue)
                if (newValue) {
                    setValue(newValue)
                }
            } else if (e.code === "KeyK" && e.altKey) {
                e.preventDefault()
                let newValue = getAdjacentValueMap[_key as keyof typeof getAdjacentValueMap]("prev")
                console.log("newValue: ", newValue)
                if (newValue) {
                    setValue(newValue)
                }
            }
        }
    }

    useEffect(() => {
        let em = document.getElementById("cmd-palette-input-parent")?.querySelector("input")
        if (em) {
            em.addEventListener("keydown", (e) => keyboardListener(e))
        }
        return () => {
            em?.removeEventListener("keydown", (e) => keyboardListener(e))
        }
    }, [])

    const close = () => {
        setSearch("")
        setOpen(false)
        setPages([] as pageList[])
    }

    const setPage = (s: pageList) => {
        setSearch("")
        setPages([...pages, s])
    }


    const getHref = (v: string): string => {
        /* NOTE: Life up state from tags and subjects as well and handle them the same way to avoid a case sensitivity issue when loading in a new tab and relying on the value for the href. Tags and Subjects might not actually require this since they're in a citext field. */
        if (pages.at(-1) === "searchNotes") {
            let idx = noteSearchCommands.map((n) => n.href.toLowerCase()).indexOf(v.toLowerCase())
            return idx === -1 ? v : noteSearchCommands[idx].href
        }
        return v
    }

    let currentDefinitionMarkdown = definitionSearchCommands.find((d) => `def-${d.id.toLowerCase()}` === value)



    return (
        <Command
            className={clsx("command-palette", (typeof _page !== "undefined" && sideBySidePages.includes(_page)) ? "side-by-side relative" : "linear")}
            onKeyDown={(e) => {
                if (e.key === 'Escape' || (e.key === 'Backspace' && !search)) {
                    e.preventDefault()
                    if (pages.length === 0) {
                        close()
                    } else {
                        setPages(pages.slice(0, -1))
                    }
                }
                if (e.key === "Enter" && e.altKey && typeof value === "string" && value.startsWith("/")) {
                    e.preventDefault()
                    let a = document.createElement("a")
                    a.href = getHref(value)
                    a.target = "_blank"
                    a.rel = "noopener noreferrer"
                    a.click()
                    close()
                    a.remove()
                }
            }}
            value={value || ""}
            onValueChange={(v) => {
                console.log("setting value: ", v)
                if (v) {
                    setValue(v)
                }
            }}
        >
            <div className={"flex flex-col"}>
                {_page && _page in pageMap && <div className={"text-sm text-muted-foreground pl-2 pt-2"}>{pageMap[_page]}</div>}
                <div cmdk-header="" id="cmd-palette-input-parent">
                    <SearchIcon />
                    <Command.Input
                        value={search}
                        onValueChange={setSearch}
                        autoFocus
                        placeholder="Search..."
                    />
                </div>
            </div>
            <Command.List
                className={clsx("no-scrollbar relative", (_page && sideBySidePages.includes(_page)) && "border-t")}
            >
                <div className={"cmdItemsPanel"}>
                    <div
                        className={"cmdListLeft"}
                    >
                        {!loading && <Command.Empty>Mother F#(&er. Nothing was found.</Command.Empty>}
                        {loading && <Command.Loading>Ah shit. Hang on…</Command.Loading>}
                        <DefaultCommandPaletteItems
                            setPage={setPage}
                            activePage={_page}
                            close={close}
                            search={search}
                        />
                        <NoteSearchCommandGroup
                            activePage={_page}
                            close={close}
                            setLoading={setLoading}
                            setNoteSearchCommands={setNoteSearchCommands}
                            noteSearchCommands={noteSearchCommands}
                        />
                        <TagSearchCommandGroup
                            activePage={_page}
                            tagSearchCommands={tagSearchCommands}
                            clearCommands={() => setTagSearchCommands([])}
                            close={close}
                            setLoading={setLoading}
                        />
                        <SubjectSearchCommandGroup
                            activePage={_page}
                            subjectSearchCommands={subjectSearchCommands}
                            clearCommands={() => setSubjectSearchCommands([])}
                            close={close}
                            setLoading={setLoading}
                        />
                        <DefinitionSearchCommandGroup
                            activePage={_page}
                            close={close}
                            setLoading={setLoading}
                            definitionSearchCommands={definitionSearchCommands}
                            clearCommands={() => setDefinitionSearchCommands([])}
                        />
                        <EquationSearchCommandGroup
                            equationSearchCommands={equationSearchCommands}
                            clearCommands={() => setEquationSearchCommands([])}
                            activePage={_page}
                            close={close}
                        />
                    </div>
                </div>
            </Command.List>
            <div cmdk-framer-right="">
                {equationSearchCommands.map((eq) => {
                    return <MathDisplayCLIENT
                        key={`eq-${eq.id}`}
                        stylesId={`equation-cmd-${eq.id}`}
                        autoWrap
                        isMathOnly
                        display
                        content={eq.content}
                        className={clsx(value === eq.value ? "inline-block" : "hidden")}
                    />
                })}
                {currentDefinitionMarkdown && (
                    <CommandPaletteMarkdownPanel
                        content={currentDefinitionMarkdown.content}
                    />
                )}
            </div>
        </Command>
    )
}


CommandPalette.displayName = "CommandPalette"


export default CommandPalette;
