import React, { useState } from 'react';
import z from 'zod';
import { argument, option } from 'pastel';
import InternalPackageSelect from '../../inputs/internalPackageSelect/main.js';
import { InternalPackageItem } from '@ulld/utilities/internalDevTypes';

export const args = z.tuple([
    
])


export const options = z.object({
	name: z
		.string()
		.default('Handsome')
		.describe(
			option({
				description: 'Some name',
				alias: 'n',
			}),
		),
});

/* export const args = z.string().array().describe("test") // or tuple. */

type Props = {
	options: z.infer<typeof options>;
};

export default function Build({ options }: Props) {
    const [selectedPackage, setSelectedPackage] = useState<InternalPackageItem | null>(null)
	return (
		<InternalPackageSelect
            setPackageData={setSelectedPackage}
            value={selectedPackage}
        >	
		</InternalPackageSelect>
	);
}
