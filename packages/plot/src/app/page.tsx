import React from 'react'
import LinePlot from '../components/plots/2d/line';



interface SanboxPageProps {

}

const SanboxPage = (props: SanboxPageProps) => {
return (
    <div className={"w-full h-full min-h-screen flex flex-col justify-center items-center gap-8"}>
            <LinePlot 
                title={`$\\gamma$`}
                f={[
                    (x: number) => Math.sin(x)
                ]}
            />
        </div>
)
}


SanboxPage.displayName = "SanboxPage"


export default SanboxPage;
