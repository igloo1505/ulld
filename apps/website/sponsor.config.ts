import { defineConfig, tierPresets } from "sponsorkit";
import { appData } from "@ulld/utilities/appData";

export default defineConfig({
    github: {
        login: appData.projectRepo.githubLogin,
        type: appData.projectRepo.githubAccountType,
        token: process.env.SPONSORKIT_GITHUB_TOKEN
    },
    patreon: {
        token: process.env.SPONSORKIT_PATREON_TOKEN
    },
    width: 800,
    // includePrivate: true,
    tiers: [
        {
            title: "Past Sponsors",
            monthlyDollars: -1,
            preset: tierPresets.xs,
        },
        {
            title: "Backers",
            // to replace the entire tier rendering
            // compose: (composer, tierSponsors, config) => {
            //   composer.addRaw(
            //     '<-- custom svg -->',
            //   )
            // },
        },
        {
            title: "Sponsors",
            monthlyDollars: 10,
            preset: tierPresets.medium,
            // to insert custom elements after the tier block
            composeAfter: (composer, _tierSponsors, _config) => {
                composer.addSpan(10);
            },
        },
        {
            title: "Silver Sponsors",
            monthlyDollars: 50,
            preset: tierPresets.large,
        },
        {
            title: "Gold Sponsors",
            monthlyDollars: 100,
            preset: tierPresets.xl,
        },
    ],

    // Replace links and avatars
    // replaceLinks: {
    //   'https://github.com/antfu': 'https://antfu.me',
    // },
    // replaceAvatars: {
    //   ...
    // },

    // Automatically Merge sponsors from different platforms
    sponsorsAutoMerge: true,
    renderer: "tiers",
    formats: ["json", "svg"]
});
