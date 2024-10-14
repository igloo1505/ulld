import React, { useState } from 'react';
import z from 'zod';
import { option } from 'pastel';
import InternalPackageSelect from '../../inputs/internalPackageSelect/main.js';
export const args = z.tuple([]);
export const options = z.object({
    name: z
        .string()
        .default('Handsome')
        .describe(option({
        description: 'Some name',
        alias: 'n',
    })),
});
export default function Build({ options }) {
    const [selectedPackage, setSelectedPackage] = useState(null);
    return (React.createElement(InternalPackageSelect, { setPackageData: setSelectedPackage, value: selectedPackage }));
}
//# sourceMappingURL=index.js.map