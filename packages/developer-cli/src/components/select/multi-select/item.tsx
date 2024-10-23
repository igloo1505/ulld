import React, {type ReactNode} from 'react';
import {MultiSelectOption} from './types.js';
import {Checkbox, CheckboxProps} from 'ink-checkbox';

interface UlldMultiSelectItemProps
	extends Pick<CheckboxProps, 'focused' | 'checked'> {
	item: MultiSelectOption;
	index: number;
	setFocusedIndex: () => void;
}

export const UlldMultiSelectItem = ({
	item,
	focused,
	checked,
	index,
}: UlldMultiSelectItemProps): ReactNode => {
	const cbProps: CheckboxProps = {
		label: item.label,
		focused: focused,
		checked,
		index,
	};

	return <Checkbox {...cbProps} />;
};

UlldMultiSelectItem.displayName = 'UlldMultiSelectItem';
