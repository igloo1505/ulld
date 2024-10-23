import {Box} from 'ink';
import React, {useState, type ReactNode} from 'react';
import {MultiSelectOption} from './types.js';
import {UlldSlicedSelectList} from './slicedList.js';

interface UlldMultiSelectProps<T> {
	options?: MultiSelectOption<T>[];
}

const testOptions = Array(50)
	.fill(0)
	.map((): MultiSelectOption => {
		const v = `${Math.random()}`.slice(0, 12);
		return {
			value: v,
			label: v,
			id: v,
		};
	});

export const UlldMultiSelect = <T extends unknown>({
	options = testOptions as MultiSelectOption<T>[],
}: UlldMultiSelectProps<T>): ReactNode => {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
	return (
		<Box width={'100%'} height={'100%'}>
			<UlldSlicedSelectList selectedIds={selectedIds} options={options} />
		</Box>
	);
};

UlldMultiSelect.displayName = 'UlldMultiSelect';
