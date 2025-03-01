import RemoveTaggableBadge from "../../../navigationUtilityComponents/badges/removeTaggableBadge";
import TaggableBadge from "../../../navigationUtilityComponents/badges/taggableBadge";
import { TaggableListDropdownProps } from "./types";

export const TaggableDropdownINTERNAL = ({
  activeItems,
  inactiveItems,
  label,
}: TaggableListDropdownProps) => {
  return (
    <>
      <h3 className={"w-full text-lg font-semibold mb-2"}>{label}</h3>
      <div
        className={
          "w-full h-fit flex flex-row justify-start items-center flex-wrap gap-4 tl-internal"
        }
      >
        {activeItems.map((s) => {
          return <RemoveTaggableBadge {...s} />;
        })}
        {inactiveItems.map((s) => {
          return <TaggableBadge {...s} />;
        })}
      </div>
    </>
  );
};
