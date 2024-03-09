import React from 'react'
import SettingsSection from '../SettingsSection'
import BibStatus, { BibStatusProps } from './BibStatus'
import NoBibFoundPrompt from './NoBibFound'
import { BibWithEntries } from '@ulld/api'



export interface BibSettingsSectionProps extends Omit<BibStatusProps, "prismaBib"> {
    fileExists: boolean
    bib: BibWithEntries
}

const BibSettingsSection = ({ bib, fileExists, ...props }: BibSettingsSectionProps) => {
    return (
        <SettingsSection titleProps={{
            title: "Bibliography"
        }}>
            {Boolean(bib) ? <BibStatus prismaBib={bib} fileExists={fileExists} /> : <NoBibFoundPrompt />}
        </SettingsSection>
    )
}


BibSettingsSection.displayName = "BibSettingsSection"


export default BibSettingsSection;
