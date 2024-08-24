import { DeleteBlogProps } from "@/db/user/mutations/delete-blog";
import { DeleteCategoryProps } from "@/db/user/mutations/delete-category";
import { DeleteMessageProps } from "@/db/user/mutations/delete-message";
import { DeleteContactFormProps } from "@/lib/services/mutations/delete-contact-form";

type DeleteActionProps =
  | DeleteCategoryProps
  | DeleteBlogProps
  | DeleteMessageProps
  | DeleteContactFormProps
