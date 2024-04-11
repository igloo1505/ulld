"use client"
import React from 'react'
import { AddEquationFormType } from './types';
import { EquationDisplay } from './equationDisplay';



interface AddEquationDisplayProps {
    form: AddEquationFormType
}


/* RESUME: Fix this issue with mathjax and rehype-mathjax. The className attribute is being parsed as classname and therefore not rendering with the appropriate css properties. */
const AddEquationDisplay = ({ form }: AddEquationDisplayProps) => {
    let formData = form.watch()
    return (
            <EquationDisplay
                bareAss
                equation={{
                    id: -1,
                    ...formData,
                }} />
    )
}


AddEquationDisplay.displayName = "AddEquationDisplay"


export default AddEquationDisplay;
