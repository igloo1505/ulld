import React from 'react'
import { EquationListItem as EquationListItemType } from './types'
import Link from 'next/link'
import { buttonVariants } from '@ulld/tailwind/button'
import { H4 } from '@ulld/ui/heading'
import { MdxContentSERVER } from '@ulld/ui/mdxDisplaySERVER'
import { DeleteModalTriggerButton } from '@ulld/ui/deleteModalTriggerButton'



interface EquationListItemProps {
    equation: EquationListItemType
}


const EquationListItem = ({ equation }: EquationListItemProps) => {
    let id = equation.equationId || equation.id
    return (
        <li className={"w-full h-full min-w-[min(400px,90vw)] rounded-lg border px-4 py-3 grid grid-cols-1 grid-rows-[auto_1fr_auto] shadow-md hover:shadow-sm transition-shadow duration-300 relative"}>
            <H4 className={"pr-4"}>
                <MdxContentSERVER
                    content={equation.title}
                    /* stylesContainerId={`${id}-title`} */
                    inline
                />
                <DeleteModalTriggerButton config={{
                    title: "Delete Equation?",
                    body: "This cannot be undone.",
                    buttonText: "Delete",
                    primaryId: equation.id,
                    buttonVariant: "destructive",
                    onConfirm: "deleteEquation"
                }}
                    className={"absolute top-2 right-2"}
                />
            </H4>
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <MdxContentSERVER
                    isMathOnly
                    content={equation.content}
                    /* stylesContainerId={`${id}-content`} */
                    className={"mx-6"}
                />
            </div>
            <div className={"mt-3 w-full flex flex-row justify-end items-center"}>
                <Link
                    href={`/equations/details/${equation.id}`}
                    className={buttonVariants({ variant: "secondary", size: "sm" })}
                >
                    Details
                </Link>
            </div>
        </li>
    )
}


EquationListItem.displayName = "EquationListItem"


export default EquationListItem;
