import { EditEquationItem } from '#/components/pageSpecific/equations/addEquationFormWrapper'
import clsx from 'clsx'
import React from 'react'
import MathDisplay from './mathDisplay'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/shad/ui/card'
import { Button } from '#/components/shad/ui/button'
import { copyStringToClipboard } from '#/utils/interaction/copyString'
import { useToast } from '#/components/shad/ui/use-toast'
import { AddEquationInterface } from '#/components/pageSpecific/equations/types'
import MdxStringDisplayClient from '../markdown/mdx/mdxStringDisplay'



interface EquationDisplayProps {
    equation: NonNullable<EditEquationItem> | AddEquationInterface
    className?: string
    noDefaultClasses?: boolean
    latexAlreadyParsed?: boolean
    bareAss?: boolean
}

const EquationDisplay = ({ equation, className, noDefaultClasses, latexAlreadyParsed, bareAss }: EquationDisplayProps) => {
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
                    {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.title }} /> : <MathDisplay math={equation.title} stylesId={`${id}-title`} />}
                </CardTitle>
                {equation.desc && <CardDescription>
                    {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.desc }} /> : <MdxStringDisplayClient applyUserStyles small content={equation.desc} />}
                </CardDescription>}
            </CardHeader>
            <CardContent>
                {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.content }} /> : <MathDisplay isMathOnly display math={equation.content} stylesId={`${id}-content`} />}
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


export default EquationDisplay;
