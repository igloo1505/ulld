import React from 'react'
/* import { serverClient } from '@ulld/api/serverClient' */
import LocalDevelopmentMenu, { LocalDevelopmentItem } from "@ulld/utilities/localDevelopmentMenu"

interface TestPageProps {

}

const testPages: LocalDevelopmentItem[] = [
    {
        href: "/dateTimeInput",
        label: "Date Time Input"
    }
]

const TestPage = async (props: TestPageProps) => {
    return (
        <div className={"w-full h-full min-h-screen flex flex-col justify-center items-center p-8 md:px-16"}>
            <LocalDevelopmentMenu
                items={testPages}
            />
        </div>
    )
}


TestPage.displayName = "TestPage"


export default TestPage;
