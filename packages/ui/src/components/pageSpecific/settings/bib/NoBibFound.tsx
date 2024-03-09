import { Checkbox } from '@ulld/tailwind/base'
import React, { useState } from 'react'
import { initializeBib } from '..'
import { LabeledCheckbox } from '../../..'



interface NoBibFoundPromptProps {

}


const NoBibFoundPrompt = (props: NoBibFoundPromptProps) => {
    const [bibFilename, setBibFilename] = useState("")
    const [databaseOnly, setDatabaseOnly] = useState(false)

    const initBib = async () => {
        const success = await initializeBib(bibFilename === "" ? "citations" : bibFilename, databaseOnly)
    }

    return (
        <div className={"flex flex-col justify-center items-center gap-4"}>
            <div className={"text-2xl font-semibold"}>
                No Bibliography Found
            </div>
            <div className={"w-fit h-fit p-6 rounded-lg flex flex-col justify-center items-center gap-2"}>
                <label htmlFor="domain name" className="block text-sm text-gray-500 dark:text-gray-300">Create Empty Bibliography</label>
                <div className={"flex flex-col justify-center items-center gap-4"}>
                    <div className="flex items-center">
                        <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">/content/bib</p>
                        <input
                            type="text"
                            placeholder="citations"
                            className="block w-full inputBase px-5 py-2.5"
                            onChange={(e) => setBibFilename(e.target.value)}
                            value={bibFilename}
                        />
                        <p className="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-l-0 rtl:rounded-l-lg rtl:rounded-r-none rtl:border-r-0 rtl:border-l rounded-r-lg">.bib</p>
                    </div>
                    <div className={"flex flex-row justify-between items-center gap-4 w-full"}>
                        <LabeledCheckbox
                            label={databaseOnly ? "Initializing Database" : "Initializing file & database"}
                            checked={!databaseOnly}
                            onChange={() => setDatabaseOnly(!databaseOnly)}
                        />
                        <button
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full xs:w-fit"
                            onClick={initBib}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


NoBibFoundPrompt.displayName = "NoBibFoundPrompt"


export default NoBibFoundPrompt;
