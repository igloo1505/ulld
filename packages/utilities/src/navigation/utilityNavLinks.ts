import { FullScreenNavItem } from "@ulld/types";

// TODO: Remove this. THis was movd to the internalAppLocations object in the utilities package at packages/utilities/src/appData.ts

export const utilityNavLinks: FullScreenNavItem[] = [
    {
        label: "Snippets",
        url: "/snippets",
    },
    {
        label: "Add Snippet",
        url: "/snippets/add",
    },
    /* { */
    /*     label: "Flip Cards", */
    /*     url: "/flipCard" */
    /* }, */
    /* { */
    /*     label: "Add Flip Card", */
    /*     url: "/flipCard/add" */
    /* }, */
    {
        label: "Equations",
        url: "/equations",
    },
    {
        label: "Add Equation",
        url: "/equations/add",
    },
    // {
    //     label: "Boards",
    //     url: "/boards",
    // },
    // {
    //     label: "Add Board",
    //     url: "/boards/create",
    // },
    {
        label: "Create To Do list",
        url: "/todo/add/list",
        forceLink: true,
    },
    {
        label: "To Do's",
        url: "/todo",
    },
    /* { */
    /*     label: "Practice Exam", */
    /*     url: "/practiceExam" */
    /* }, */
    {
        label: "Bibliography",
        url: "/bibliography",
    },
    /* { */
    /*     label: "Calendar", */
    /*     url: "/calendar?past=true" */
    /* }, */
    // {
    //     label: "Notebooks",
    //     url: "/notebooks",
    // },
    // {
    //     label: "Value Search",
    //     url: "/valueTable?fixed=5",
    // },
    {
        label: "Settings",
        url: "/settings",
    },
    {
        label: "Auto-Property Settings",
        url: "/settings/autoSettings",
    },
    {
        label: "Dictionary",
        url: "/dictionary",
    },
];
