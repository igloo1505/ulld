import { ReactNode } from "react";
import { z } from "zod";

const projectDataSchema = z.object({
    title: z.string().max(30),
    desc: z.string().max(120),
    repo: z.string().url(),
    hostedSite: z.string().url().optional(),
    screenShots: z
        .string()
        .array()
        .default([])
        .describe("filepaths relative to the public/assets/resume directory"),
});

const workHistoryItemSchema = z.object({
    title: z.string().max(50),
    desc: z.string().max(150),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
});

const skillsSchema = z.record(
    z.string(),
    z.union([
        z.string().array(),
        z.record(z.string(), z.number().min(0).max(10)),
    ]),
);

const resumeDataSchema = z.object({
    intro: z.string().max(750),
    github: z.string().url().default("https://github.com/igloo1505"),
    email: z.string().email().default("aiglinski414@gmail.com"),
    homepage: z.string().url().default("https://uhlittlelessdum.com"),
    linkedIn: z.string().url().optional(),
    dob: z.coerce.date().default(new Date("4/19/1988")),
    avatar: z
        .string()
        .describe("Path to avatar relative to public/assets/resume directory")
        .default("avatar.png"),
    personalInterests: z.string().array(),
    projects: projectDataSchema.array(),
    projectsDesc: z.string().optional(),
    workHistory: workHistoryItemSchema.array(),
    skills: skillsSchema,
});

export type ResumeData = z.output<typeof resumeDataSchema>

export type ResumeDataInput = z.input<typeof resumeDataSchema>;

// TODO: Come back and edit this properly.
const resumeData: ResumeDataInput = {
    intro:
        "My name is Andrew. For the past 7 years I’ve worked primarily with browser based technologies, but I also have experience working with Python and Swift. I feel like I perform best when I’m challenged, and I would hope to find that in my next job as well. I majored in Physics at the University of Wisconsin-Milwaukee, and this past February decided to take time away from my freelance work to write a paper relating Einstein’s special and general theory of relativity to our peculiar (or accumulative) velocity here on Earth. That paper was submitted for publication on 10/24/2022, so I’m now excited to move back into the field I left behind.",
    skills: {
        "Frameworks, APIs and Libraries": {
            React: 10,
            MongoDB: 10,
            Prisma: 10,
            Express: 10,
            "Next.js": 10,
            "Google Analytics": 8,
            GraphQL: 6,
            Postgres: 8,
            Mongoose: 9,
            "Node.js": 9.5,
            "Google Cloud": 8,
            AWS: 7,
        },
        Languages: {
            Typescript: 10,
            Python: 9,
            "Bash/Zsh": 8,
            "Css & Sass": 10,
            Latex: 8,
            Swift: 6,
            Lua: 7,
        },
        "Other Tools": [
            "Git",
            "Framer Motion & Gsap",
            "Three.js",
            "Socket.io",
            "OAuth",
            "Redux",
            "Webpack & Babel",
            "Jupyter",
            "Various Data Viz Libraries",
            "Jest, Vitest, Postman testing",
        ],
    },
    personalInterests: [
        "Physics & Cosmology",
        "Ancient History",
        "Cooking (well, eating mostly)",
        "Reading Greek mythology to my puppy",
        "Math... <span class='italic'>I know</span>",
    ],
    projectsDesc: "Due to my current living situation, much of my more meaningful previous work is no longer hosted. I can provide links to the repo's or video demonstrations on request.",
    projects: [],
    workHistory: []
};

export const getResumeData = (): ResumeData  => {
    return resumeDataSchema.parse(resumeData)
}
