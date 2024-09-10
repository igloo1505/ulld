import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from '@ulld/utilities/getBaseEmbeddableProps'
import { getRandomId } from "@ulld/utilities/identity";
import EquationContextMenu from './equationContextMenu'
import { serverClient } from '@ulld/api/serverClient'
import HandleEquationClick from './handleEquationClick';
import { MdxContentRSC } from '@ulld/render/mdx/rsc';



interface EquationWrapperProps extends BaseEmbeddableComponentProps {
    children?: React.ReactNode
    id?: string /// Equation Id... not DOM id
    python?: string
}

/* TODO: Come back here and allow providing an equation directly in the component as a child or, better yet, as a prop specifically of type string. Allow all of the prisma equation fields as properties, and save it automatically on change. */
const EquationWrapper = async ({ id, python, ..._props }: EquationWrapperProps) => {
    const props = getBaseEmbeddableProps(_props, "w-auto h-fit flex flex-col justify-center items-center")
    if (!id) {
        return null
    }
    const domId = id ? `${id}-equation` : getRandomId()
    let res = await serverClient.equations.getEquationEmbedProps({
        equationId: id as string,
    })
    if(!res){
        return null
    }



    return (
        <EquationContextMenu
            python={res.asPython}
            latex={res.content}
            equationId={id}
        >
            <HandleEquationClick
                domId={domId}
                equationId={id}
            />
            <div
                {...props}
            >
                <MdxContentRSC
                    autoWrap
                    isMathOnly
                    hideMathjaxLabels
                    bareAss
                    className="cursor-pointer w-fit h-fit border-2 px-4 hover:border-primary transition-colors duration-200 ease-in group-[.signifyEquationIds]/html:bg-primary group-[.signifyEquationIds]/html:text-primary-foreground rounded-md !text-foreground max-w-[90vw] *:!text-foreground"
                    id={domId}
                />
            </div>
        </EquationContextMenu>
    )
}


EquationWrapper.displayName = "EquationWrapper"


export default EquationWrapper;
