import { faker } from "@faker-js/faker";
import { validIconNameList } from "@ulld/utilities/validIconNameList";
import { defaultCopyrightText, maxSidebarLinks } from "../staticSettingData";
import type { NavigationFormWithUtilityFields } from "./schema";

export const getDevelopmentDefaultValues =
    (): NavigationFormWithUtilityFields => {
        return {
            quickLinkLabel: "Quick Links",
            copyrightText: defaultCopyrightText,
            footerSectionInput: "",
            footerSections: Array(3)
                .fill(0)
                .map(() => {
                    return {
                        label: faker.lorem.words({ min: 1, max: 3 }),
                        items: Array(Math.ceil(Math.random() * 5))
                            .fill(0)
                            .map(() => {
                                return {
                                    label: faker.lorem.words({ min: 1, max: 2 }),
                                    href: faker.internet.url(),
                                };
                            }),
                    };
                }),
            sidebarLinks: Array(faker.number.int({ min: 2, max: maxSidebarLinks }))
                .fill(0)
                .map(() => {
                    return {
                        label: faker.lorem.words({ min: 1, max: 2 }),
                        value: `/somePath${Math.random().toString().slice(1, 5)}`,
                        icon: faker.helpers.arrayElement(
                            validIconNameList,
                        ) as (typeof validIconNameList)[number],
                        fieldType: "url",
                        position: faker.helpers.arrayElement(["top", "bottom"]) as
                            | "top"
                            | "bottom",
                    };
                }),
            navbarLinks: Array(4)
                .fill(0)
                .map(() => {
                    return {
                        label: faker.lorem.words({ min: 1, max: 2 }),
                        value: faker.internet.url(),
                        fieldType: "url",
                    };
                }),
        };
    };
