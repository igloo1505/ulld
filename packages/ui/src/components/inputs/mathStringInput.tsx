"use client"
import React, { useMemo } from 'react'
import "./mathInputStyles.scss"
import { addStyles, EditableMathField, EditableMathFieldProps, MathFieldConfig } from 'react-mathquill'


interface MathStringInputProps extends EditableMathFieldProps {
    value: string
    setValue: (s: string) => void
}


const mathInputConfig: MathFieldConfig = {
    spaceBehavesLikeTab: true,
    autoCommands: "alpha beta chi delta epsilon eta gamma iota kappa lambda mu nu omega phi pi psi rho sigma tau theta upsilon xi zeta digamma varepsilon varkappa varphi varpi varrho varsigma vartheta Delta Gamma Lambda Omega Phi Pi Psi Sigma Theta Upsilon Xi hat bar equiv sqrt int sum"
}


const MathStringInput = ({ value, setValue, ...props }: MathStringInputProps) => {
    useMemo(() => addStyles(), [])
    return (
        <EditableMathField
            className={"latex-math-input flex min-h-10 w-full rounded-lg border !border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground !shadow-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&.mq-focused]:ring-2 [&.mq-focused]:ring-ring [&.mq-focused]:ring-offset-2"}
            {...props}
            latex={value}
            config={mathInputConfig}
            onChange={(mathField) => {
                setValue(mathField.latex())
            }}
        />
    )
}


MathStringInput.displayName = "MathStringInput"


export default MathStringInput;
