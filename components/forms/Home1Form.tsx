"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IconDraft, IconPaperPlus, IconSend, IconX } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/form-fields/input-field";
import { Spinner } from "@/components/spinner";
import { TextEditorField } from "@/components/form-fields/text-editor-field";
import { addBlog } from "@/lib/services/mutations/add-blog";
import { BlogProps, blogSchema } from "@/lib/schemas/blog-schema";
import { getDescription } from "@/utils/get-description";
import { Home1Props, home1Schema } from "@/lib/schemas/home-page-schemas";

export default function Home1Form() {
 
  const defaultValues = {
    title_en: "",
    text_en: "",
    linkText_en: "",
    title_es: "",
    text_es: "",
    linkText_es: "",
  };

  const form = useForm<Home1Props>({
    defaultValues,
    resolver: zodResolver(home1Schema),
  });

  const {
    setError,
    formState: { isSubmitting, errors },
    setValue,
  } = form;

  const onSubmit = async (values: Home1Props) => {
     console.log("values", values);

    const result = await addBlog({ values });

    // console.log("result", result);

    if (result.success) {
      toast.success(result.success);
    } else if (result.error) {
      toast.error(result.error);

      const errorType = result?.errorType as "title" | "slug";

      errorType &&
        setError(errorType, { message: result.error }, { shouldFocus: true });
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="w-full">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-5 lg:border-b lg:border-border"
          noValidate
        >
          <div className="w-full max-w-[622px] 2xl:max-w-[1170px] min-h-[90vh] lg:border-r lg:border-border lg:pr-5">
            <div className="lg:mt-5 lg:mb-10 space-y-9">
              <InputField
                label="Title:"
                placeholder="Enter blog title"
                name="title"
              />

<InputField
                label="Title:"
                placeholder="Enter blog title"
                name="title"
              />

              <div className="mt-5">
                <TextEditorField label="Body:" name="body" />
              </div>
            </div>
          </div>
          <div className="mt-5 lg:w-[545px]">
            <div className="hidden lg:flex justify-end items-center gap-3">
              <Button
                type="submit"
                variant="outline"
                onClick={() => setValue("published", false)}
                disabled={isSubmitting}
                className="w-[178px] flex justify-center items-center rounded-full gap-2"
              >
                {/* <span className="size-5">
                  {isSubmitting ? (
                    published === false ? (
                      <Spinner className="size-5 border-gray-500 border-r-gray-500/30 border-b-gray-500/30 dark:border-gray-300 dark:border-r-gray-300/30 dark:border-b-gray-500/30" />
                    ) : (
                      <IconDraft />
                    )
                  ) : (
                    <IconDraft />
                  )}
                </span> */}
                Save as Draft
              </Button>
              <Button
                type="submit"
                onClick={() => setValue("published", true)}
                disabled={isSubmitting}
                className="w-[178px] flex justify-center items-center rounded-full gap-2.5"
              >
                {/* <span className="size-5">
                  {isSubmitting ? (
                    published === true ? (
                      <Spinner className="size-5" />
                    ) : (
                      <IconSend />
                    )
                  ) : (
                    <IconSend />
                  )}
                </span> */}
                Publish
              </Button>
            </div>

          </div>
        </form>
      </FormProvider>
    </div>
  );
}
