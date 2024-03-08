import { ImageIcon } from '@radix-ui/react-icons';
import React from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'


interface SettingsPhotoInputProps {
    label?: string
    promptText?: string
    filetypeText?: string
    fileValue: File[] | null
    dropzone: DropzoneOptions
}


const SettingsPhotoInput = (props: SettingsPhotoInputProps) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone(props.dropzone)
    return (
        <div className="col-span-full">
            {props.label && <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                {props.label}
            </label>}
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-gray-200/25"
                {...getRootProps()}
            >
                <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 gap-0">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md dark:text-white dark:font-semibold font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>{props.promptText || "Upload a file"}</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                {...getInputProps()}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">{props.filetypeText || "PNG, JPG, GIF up to 10MB"}</p>
                </div>
            </div>
        </div>
    )
}


SettingsPhotoInput.displayName = "SettingsPhotoInput"


export default SettingsPhotoInput;
