import React, {useMemo, type ReactNode} from 'react';
import {InternalAppName} from '@ulld/types';
import {
	getInternalAppNames,
	getInternalPackageNames,
	getAllInternalNames,
} from '@ulld/utilities/internalDataHelpers';
import {UlldMultiSelect} from './multi-select/main.js';
import {MultiSelectOption} from './multi-select/types.js';

interface InternalPackageSelectProps {
	type?: 'package' | 'app' | 'both';
}

const internalNameMap: {
	[K in NonNullable<
		InternalPackageSelectProps['type']
	>]: () => InternalAppName[];
} = {
	package: getInternalPackageNames,
	app: getInternalAppNames,
	both: getAllInternalNames,
};

const InternalPackageSelect = ({
	type = 'both',
}: InternalPackageSelectProps): ReactNode => {
	const props = useMemo((): MultiSelectOption<InternalAppName>[] => {
		return internalNameMap[type]().map(n => {
			return {
				value: n,
				label: n,
				id: n,
			};
		});
	}, [type]);

	return <UlldMultiSelect />;
};

InternalPackageSelect.displayName = 'InternalPackageSelect';

export default InternalPackageSelect;
