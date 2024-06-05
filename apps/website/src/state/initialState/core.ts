export interface NavbarButton {
    href: string;
    label: string;
    id: string;
}

export type InitialCoreState = {
    hasRendered: boolean;
    landingSection: string;
    navbarButtons: NavbarButton[];
    drawer: {
        open: boolean;
        description?: string;
        title?: string;
        breakpoint: number
    };
};

export const initialCoreState: InitialCoreState = {
    hasRendered: false,
    landingSection: "hero",
    navbarButtons: [],
    drawer: {
        open: false,
        breakpoint: 1024
    },
};
