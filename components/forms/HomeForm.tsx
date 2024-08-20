"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IconDraft, IconPaperPlus, IconSend, IconX } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/form-fields/input-field";
import { Spinner } from "@/components/spinner";
import { TextEditorField } from "@/components/form-fields/text-editor-field-lite";
import { addBlog } from "@/lib/services/mutations/add-blog";
import { BlogProps, blogSchema } from "@/lib/schemas/blog-schema";
import { getDescription } from "@/utils/get-description";
import { HomeProps, homeSchema } from "@/lib/schemas/home-page-schemas";
import { editHome } from "@/lib/actions/home.actions";

export  default  function HomeForm() {
  const [loading, setLoading] = useState<boolean>(true)
  const [homeData, setHomeData] = useState<HomeProps>()
  const [error, setError] = useState<string | null>(null)

  useEffect( () => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch("http://localhost:3000/homeData")
        if(!response.ok){
          throw new Error("Response was not ok")
        }
        const data = await response.json()
        setHomeData(data)
      }catch(err) {
        if(err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error ocurred")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchHomeData()
  }, [])

  if(loading) { return <p>Loading...</p>}
  if(error) { return <p>Error: {error}</p>}
  
  const defaultValues = {
    en: {
      home1: {
        title: "",
        text: "",
        linkText: "",
      },
    },
    es: {
      home1: {
        title: "",
        text: "",
        linkText: "",
      },
    },
  };

  const form = useForm<HomeProps>({
    defaultValues,
    resolver: zodResolver(homeSchema),
  });

  const {
    // setError,
    formState: { isSubmitting, errors },
    setValue,
  } = form;

  const onSubmit = async (values: HomeProps) => {
    // console.log("values", values);

    const result = await editHome({ values });

    if (result.success) {
      toast.success(result.success);
    } else if (result.error) {
      toast.error(result.error);
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="w-full mt-16">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col  gap-5 lg:border-b lg:border-border"
          noValidate
        >
          <div className="w-full max-w-[622px] 2xl:max-w-[1170px] min-h-[90vh] lg:border-r lg:border-border lg:pr-5 flex flex-col gap-9">
            <div className="flex flex-col lg:flex-row">
              <div>
                <div className="text-3xl">Section 1</div>
                <div>
                  1)After editing, save changes . 2) Press "Publish" to update
                  dictionaries in the client
                </div>
              </div>
              <div className="mt-5 lg:w-[545px]">
                <div className=" lg:flex justify-end items-center gap-3">
                  <Button
                    type="submit"
                    variant="outline"
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
                    Save
                  </Button>
                  <Button
                    type="submit"
                    // onClick={() => setValue("published", true)}
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
            </div>
            <div className="flex flex-col lg:flex-row gap-9">
              <InputField
                label="EN Title:"
                placeholder="Enter title"
                name="en.home1.title"
              />

              <InputField
                label="ES Title:"
                placeholder="Enter  title"
                name="es.home1.title"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-9">
              <InputField
                label="EN Link text:"
                placeholder="Enter link text"
                name="en.home1.linkText"
              />

              <InputField
                label="ES Link text:"
                placeholder="Enter link text"
                name="es.home1.linkText"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-9">
              <TextEditorField label="EN text:" name="en.home1.text" />
              <TextEditorField label="ES text:" name="es.home1.text" />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
