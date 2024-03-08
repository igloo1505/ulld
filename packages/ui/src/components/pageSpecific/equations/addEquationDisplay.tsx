"use client"
import EquationDisplay from '#/components/specificTypeDisplay/equation/equationDisplay';
import React, { useEffect, useState } from 'react'
import { AddEquationFormType } from './types';
import SideMenuDisplayContainer from '#/components/layout/uniqueLayouts/sideMenu/sideMenuDisplayContainer';



interface AddEquationDisplayProps {
    form: AddEquationFormType
}

const AddEquationDisplay = ({ form }: AddEquationDisplayProps) => {
    let formData = form.watch()
    return (
        <SideMenuDisplayContainer>
            <EquationDisplay
                bareAss
                equation={{
                    id: -1,
                    ...formData,
                }} />
        </SideMenuDisplayContainer>
    )
}


AddEquationDisplay.displayName = "AddEquationDisplay"


export default AddEquationDisplay;
