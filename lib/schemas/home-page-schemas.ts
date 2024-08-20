import { z } from "zod";

import { removeHtmlTags } from "@/utils/remove-html-tags";

export const home1Schema = z.object({
  title_en: z
    .string()
    .min(1, "Title is required")
    .refine((value) => value.trim().length > 0, "Title can't be empty"),

  text_en: z.string().min(1, "Text is required"),

  linkText_en: z.string().min(1, "link text is required"),

  title_es: z
    .string()
    .min(1, "Title is required")
    .refine((value) => value.trim().length > 0, "Title can't be empty"),

  text_es: z.string().min(1, "Text is required"),

  linkText_es: z.string().min(1, "link text is required"),
});

export type Home1Props = z.infer<typeof home1Schema>;
