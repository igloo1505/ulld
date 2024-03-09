"use client"
import React, { useEffect, useState } from 'react'
import { AddEquationFormType } from './types';
import SideMenuDisplayContainer from '../../layouts/sideMenu/sideMenuDisplayContainer';
import EquationDisplay from '../../math/equation/equationDisplay';



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
