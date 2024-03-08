import React from 'react'


const NoneFound = () => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <div className={"text-3xl text-black dark:text-white"}>
                No notes were found.
            </div>
        </div>
    )
}


NoneFound.displayName = "NoneFound"


export default NoneFound;
