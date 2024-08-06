"use client"
import React from 'react'
import { AddEquationFormType } from './types';
import { EquationDisplay } from './equationDisplay';



interface AddEquationDisplayProps {
    form: AddEquationFormType
}


const AddEquationDisplay = ({ form }: AddEquationDisplayProps) => {
    let formData = form.watch()
    return (
            <EquationDisplay
                bareAss
                equation={{
                    id: -1,
                    ...formData,
                }}
        />
    )
}


AddEquationDisplay.displayName = "AddEquationDisplay"


export default AddEquationDisplay;
