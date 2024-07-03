import React from 'react'



interface DocsHomePageProps {

}

const DocsHomePage = (props: DocsHomePageProps) => {
return (
    <div className={"w-full h-full min-h-screen-noNav flex justify-center items-center"}>
            <h1>
                Docs home page
            </h1>
        </div>
)
}


DocsHomePage.displayName = "DocsHomePage"


export default DocsHomePage;
