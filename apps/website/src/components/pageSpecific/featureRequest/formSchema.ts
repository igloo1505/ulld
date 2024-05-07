import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";
import { z } from "zod";

export const featureRequestCategories = [
    "Math",
    "Physics",
    "STEM",
    "Medicine & Health",
    "Plotting",
    "Education & Classroom",
    "Teacher Resource",
    "Study & Academia",
    "Research & Authoring",
    "Journaling",
    "Business Management",
    "Task Management & Workflow",
    "Additional Data Types",
    "Search & Organization",
    "External Integrations",
    "UI Customizability",
    "Functional Customizability",
    "Collaboration",
    "Additional Config Options",
    "Additional Platforms",
    "Additional Use Cases",
] as const;

export const featureRequestUserBase = [
    "Students",
    "Teachers",
    "Researchers & Professionals",
    "Developers",
    "Engineers & Architects",
    "Professionals: STEM",
    "Students: STEM",
    "Students: General",
    "Students: K-12",
    "Students: Undergrad",
    "Students: Graduate",
    "Small Business Owners",
    "Self Employeed",
    "Non-Academic",
] as const;

export const featureRequestFormSchema = z.object({
    email: z.string().email(),
    category: z.union([z.enum(featureRequestCategories).array(), z.enum(featureRequestCategories)]).transform(makeArrayTransform),
    userBase: z.union([z.enum(featureRequestUserBase).array(), z.enum(featureRequestUserBase)]).transform(makeArrayTransform),
    message: z.string().min(20)
});


export type FeatureRequestFormSchema = z.infer<typeof featureRequestFormSchema>
