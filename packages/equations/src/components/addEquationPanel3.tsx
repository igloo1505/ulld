import React, { MouseEvent } from 'react'
import { AddEquationFormType } from './types'
import { TaggableComboBox } from '@ulld/full-form/taggableCombobox'
import { SideFormContainer } from '@ulld/full-form/layout/sidePanel/multiStepContainer'
import { TextInputWithBadgeList, TextInputWithBadgeListProps } from '@ulld/full-form/textInputWithBadgeList'


interface AddEquationFormThreeProps {
    form: AddEquationFormType
    next: (e: MouseEvent<HTMLButtonElement>) => (void | Promise<void>)
    back: (e: MouseEvent<HTMLButtonElement>) => (void | Promise<void>)
}

export const AddEquationFormThree = ({ form, next, back }: AddEquationFormThreeProps) => {
    return (
        <SideFormContainer
            form={form}
            onSubmit={next}
            submitBtnText="Submit"
            onBackClick={back}
        >
            <TaggableComboBox
                name="tags"
                label="Tags"
                type="tag"
                fullWidth
                multiple
            />
            <TextInputWithBadgeList
                name="variables"
                label="Variables"
            />
            <TextInputWithBadgeList
                name="keywords"
                label="Keywords"
            />
        </SideFormContainer>
    )
}


AddEquationFormThree.displayName = "AddEquationFormThree"
