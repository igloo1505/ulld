import * as React from "react";
import { ButtonProps } from "./button";
declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): React.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): React.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
//# sourceMappingURL=pagination.d.ts.map