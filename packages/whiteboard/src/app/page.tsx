import { Whiteboard } from '../components/whiteboard/main';
import React from 'react'



interface SanboxPageProps {

}

const SanboxPage = (props: SanboxPageProps) => {
return (
        <div className={"w-full flex flex-col items-center min-h-screen"}>
            <Whiteboard 
                id="test2"
                layout="full-width"
            />
        </div>
)
}


SanboxPage.displayName = "SanboxPage"


export default SanboxPage;
