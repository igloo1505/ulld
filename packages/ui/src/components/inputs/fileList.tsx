import React from 'react'
import { XIcon } from 'lucide-react'



interface FileInputListProps {
    files: File[] | null
    removeItem: (title: string) => void
}


const FileItem = ({ file, remove }: { file: File, remove: FileInputListProps['removeItem'] }) => {
    return (
        <div className={"w-full flex flex-row justify-start items-center bg-gray-200 dark:bg-gray-800 gap-4 py-5 px-4 rounded-lg"}>
            <XIcon className={"h-5 w-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg cursor-pointer"} onClick={() => remove(file.name)} />
            <div className={""}>{file.name}</div>
        </div>
    )
}


const FileInputList = ({ files, removeItem }: FileInputListProps) => {
    if (!files || files.length === 0) return null
    return (
        <div className={"flex flex-col gap-2"}>
            {files.map((f, i) => <FileItem file={f} remove={removeItem} key={`file-${i}`} />)}
        </div>
    )
}


FileInputList.displayName = "FileInputList"


export default FileInputList;
