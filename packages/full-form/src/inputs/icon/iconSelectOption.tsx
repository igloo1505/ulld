import { SelectItem } from "@ulld/tailwind/select";
import React from "react";
import { SelectOption } from "../../types";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import clsx from "clsx";

interface IconSelectOptionProps<T extends unknown> {
  item: SelectOption<T>;
  className?: string;
  onClick: (newValue: T) => void;
}

const IconSelectOption = ({
  item,
  className,
  onClick,
}: IconSelectOptionProps<string>) => {
  return (
    <SelectItem
      value={item.value}
      className={clsx("!grid grid-cols-[40px_1fr]", className)}
      onClick={() => {
        onClick(item.value);
      }}
    >
      <DynamicIcon
        name={item.value as ValidIconName}
        className={"h-4 w-4 inline"}
      />
      <span className={"w-full"}>{item.content}</span>
    </SelectItem>
  );
};

IconSelectOption.displayName = "IconSelectOption";

export default IconSelectOption;
