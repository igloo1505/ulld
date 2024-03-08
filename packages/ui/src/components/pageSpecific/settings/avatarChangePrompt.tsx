import { AvatarIcon } from '@radix-ui/react-icons';
import React, { ChangeEventHandler, MouseEventHandler } from 'react'



interface SettingsAvatarChangePromptProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const SettingsAvatarChangePrompt = (props: SettingsAvatarChangePromptProps) => {
    return (
        <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
                <AvatarIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                    type="button"
                    className="rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50"
                    onClick={props.onClick}
                >
                    Change
                </button>
            </div>
        </div>
    )
}


SettingsAvatarChangePrompt.displayName = "SettingsAvatarChangePrompt"


export default SettingsAvatarChangePrompt;
