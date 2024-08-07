import { Route } from "next";
import Link from "next/link";
import cn from "@ulld/utilities/cn";
import router from "next/router";

interface AddItemDropdownButtonProps {
  href: Route;
  label: string;
}

export const AddItemDropdownButton = ({
  href,
  label,
}: AddItemDropdownButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "cursor-pointer w-full text-center text-sm text-muted py-2 px-2 hover:text-foreground hover:bg-muted transition-colors duration-200",
      )}
    >
      {label}
    </Link>
  );
};

AddItemDropdownButton.displayName = "AddItemDropdownButton";
