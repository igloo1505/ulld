import React from 'react'
import TikzLoader from '#/components/wrappers/TikzLoader'
import clsx from 'clsx'
import { getRandomId } from '#/utils/ui'
import TikzColorHandler from './tikzColorHandler'
import TikzPlaceholder from './tikzPlaceholder'
import { getOnlineStatusServerSide } from '#/utils/server/getOnlineStatus'


interface TikzDiagramProps {
    content: string
    foreground?: boolean
    primary?: boolean
    noMargin?: boolean
}


const TikzDiagram = async ({ content, foreground, primary, noMargin }: TikzDiagramProps) => {
    const id = `tikz-${getRandomId(8)}`
    const online = await getOnlineStatusServerSide()

    return (
        <>
            <TikzLoader />
            <div id={id} className={clsx("w-full max-h-full min-h-0 h-fit flex flex-col justify-center items-center relative", !noMargin && "p-4")}>
                <TikzColorHandler
                    id={id}
                    primary={primary}
                    foreground={foreground !== false}
                />
                {online !== true && <TikzPlaceholder id={id} />}
                {online !== false && <script
                    type="text/tikz"
                    async
                    defer
                    id={`${id}-script`}
                >
                    {`\\begin{tikzpicture} 
 ${content} 
 \\end{tikzpicture} 
                 `}
                </script>}
            </div>
        </>
    )
}


TikzDiagram.displayName = "TikzDiagram"


export default TikzDiagram;



