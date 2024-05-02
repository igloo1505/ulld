import { useToast} from '@ulld/tailwind/use-toast'
import {  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@ulld/tailwind/card'
import { Button } from '@ulld/tailwind/button'
import { copyStringToClipboard } from '@ulld/utilities/copyStringToClipboard'
import clsx from 'clsx'
import React from 'react'
import { MdxContentCLIENT } from '@ulld/render/mdx/client'
import { EditEquationItem } from './addEquationFormWrapper'
import { AddEquationInterface } from './types'



interface EquationDisplayProps {
    equation: NonNullable<EditEquationItem> | AddEquationInterface
    className?: string
    noDefaultClasses?: boolean
    latexAlreadyParsed?: boolean
    bareAss?: boolean

}

export const EquationDisplay = ({ equation, className, noDefaultClasses, latexAlreadyParsed, bareAss }: EquationDisplayProps) => {
    const { toast } = useToast()
    const id = equation.id && equation.id >= 0 ? `equation-${equation.id}` : "addEquation_Equation"

    const copyIdToClipboard = async () => {
        if (!equation.equationId) return
        await copyStringToClipboard(equation.equationId)
        toast({
            title: "Success",
            description: "Equation Id has been copied to your clipboard"
        })
    }

    return (
        <Card
            className={clsx(!noDefaultClasses && "w-fit h-fit", className && className)}
        >
            <CardHeader>
                <CardTitle>
                    <MdxContentCLIENT content={equation.title} inline stylesId={`${id}-title`} />
                </CardTitle>
                {equation.desc && <CardDescription>
                    <MdxContentCLIENT applyUserStyles small content={equation.desc} />
                </CardDescription>}
            </CardHeader>
            <CardContent className={"flex flex-col justify-center items-center"}>
                 <MdxContentCLIENT autoWrap isMathOnly large content={equation.content} stylesId={`${id}-content`} />
            </CardContent>
            {!bareAss && <CardFooter className="flex justify-end gap-4">
                <Button
                    onClick={copyIdToClipboard}
                    variant="outline"
                >
                    Copy Id
                </Button>
                <Button>
                    Details
                </Button>
            </CardFooter>}
        </Card>
    )
}


EquationDisplay.displayName = "EquationDisplay"
