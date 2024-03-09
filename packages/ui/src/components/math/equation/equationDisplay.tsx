import { useToast, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@ulld/tailwind'
import { copyStringToClipboard } from '@ulld/utilities'
import clsx from 'clsx'
import React from 'react'
import { EditEquationItem, AddEquationInterface, MathDisplayCLIENT } from '../..'
import { MdxContentCLIENT } from '../../mdxContent/mdxContentCLIENT'



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
                    {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.title }} /> : <MathDisplayCLIENT content={equation.title} stylesId={`${id}-title`} />}
                </CardTitle>
                {equation.desc && <CardDescription>
                    {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.desc }} /> : <MdxContentCLIENT applyUserStyles small content={equation.desc} />}
                </CardDescription>}
            </CardHeader>
            <CardContent>
                {latexAlreadyParsed ? <div dangerouslySetInnerHTML={{ __html: equation.content }} /> : <MathDisplayCLIENT isMathOnly display content={equation.content} stylesId={`${id}-content`} />}
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
