import { motion } from 'framer-motion'
import React from 'react'
import FormSectionHeading from '../../../formUtils/formSectionHeading'
import { LeadText } from '@ulld/embeddable-components/components/client/text/lead'


interface SQLiteSpecificConfigurationFormProps {

}

export const SQLiteSpecificConfigurationForm = (props: SQLiteSpecificConfigurationFormProps) => {
return (
    <motion.div
            initial={{
                x: 300,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            exit={{
                x: 300,
                opacity: 0
            }}
        >
        <FormSectionHeading>
                SQLite
        </FormSectionHeading>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <LeadText className={"max-w-[min(640px,90%)] text-center"}>
                    That's it. SQLite requires no further configuration.
                </LeadText>
            </div>
        </motion.div>
)
}


SQLiteSpecificConfigurationForm.displayName = "SQLiteSpecificConfigurationForm"
