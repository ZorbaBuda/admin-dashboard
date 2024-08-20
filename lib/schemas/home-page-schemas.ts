import { z } from "zod";

import { removeHtmlTags } from "@/utils/remove-html-tags";

export const homeSchema = z.object({
  en: z.object({
    home1: z.object({
      title: z
        .string()
        .min(1, "Title is required")
        .refine((value) => value.trim().length > 0, "Title can't be empty"),

      text: z.string().min(1, "Text is required"),

      linkText: z.string().min(1, "link text is required"),
    }),
  }),
  es: z.object({
    home1: z.object({
      title: z
        .string()
        .min(1, "Title is required")
        .refine((value) => value.trim().length > 0, "Title can't be empty"),

      text: z.string().min(1, "Text is required"),

      linkText: z.string().min(1, "link text is required"),
    }),
  }),
});

export type HomeProps = z.infer<typeof homeSchema>;
