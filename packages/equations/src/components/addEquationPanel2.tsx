import React from 'react'
import { AddEquationFormType } from './types'
import { SideFormContainer } from '@ulld/full-form/layout/sidePanel/multiStepContainer'
import { CodeInput } from '@ulld/full-form/codeTextArea'
import { TextAreaInput } from '@ulld/full-form/textArea'


interface AddEquationFormTwoProps {
    form: AddEquationFormType
    next: () => void
    back: () => void
}

export const AddEquationFormTwo = ({ form, next, back }: AddEquationFormTwoProps) => {
    return (
        <SideFormContainer
            form={form}
            onSubmit={next}
            submitBtnText="Next"
            onBackClick={back}
        >
            <TextAreaInput
                label="Description (optional)"
                desc="Can contain latex"
                name="desc"
            />
            <CodeInput
                localStorageKey='add-equation-2'
                name="asPython"
                label="Python Implementation"
                language="python"
            />
        </SideFormContainer>
    )
}


AddEquationFormTwo.displayName = "AddEquationFormTwo"
