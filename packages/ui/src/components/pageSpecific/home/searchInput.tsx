"use client"
import { queryAllNotes } from '#/actions/client/async'
import { onEnter } from '#/actions/listeners'
import { SearchResult } from '#/types/query'
import React, { ChangeEvent, useState } from 'react'


interface MainSearchInputProps {

}

const SearchResult = ({ item, active }: { item: SearchResult, active?: boolean }) => {
    return (
        <div className={"w-full z-20 bg-gray-100 dark:bg-gray-800"}>
            <div className={"text-gray-900 dark:gray-50"}>
                {item.title}
            </div>
        </div>
    )
}


const MainSearchInput = (props: MainSearchInputProps) => {
    const [value, setValue] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const searchNotes = async (val: string) => {
        const data = await queryAllNotes(val)
        setResults(data)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setValue(target.value)
        searchNotes(target.value)
    }

    const onSearch = () => {

    }

    return (
        <input type={"search"} onKeyDown={(e) => onEnter(e, onSearch)} value={value} onChange={onChange} className="mt-2 z-10  w-full absolute left-[50%] bottom-[15%] -translate-x-[50%] -translate-y-[50%] placeholder-gray-400/70 rounded-lg border border-gray-200 bg-gray-700 bg-opacity-40 px-5 py-4 text-white font-bold text-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 max-w-[400px]" />
    )
}


MainSearchInput.displayName = "MainSearchInput"


export default MainSearchInput;
