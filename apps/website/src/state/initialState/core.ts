export interface NavbarButton {
  href: string;
  label: string;
  id: string;
}

export type InitialCoreState = {
  hasRendered: boolean;
  landingSection: string;
  navbarButtons: NavbarButton[];
};

export const initialCoreState: InitialCoreState = {
  hasRendered: false,
  landingSection: "hero",
  navbarButtons: [],
};
