import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@/components/icons";
import { blogsColumn } from "./blogs-table/blogs-column";
import { getAuthSession } from "@/lib/next-auth";
import { getBlogs } from "@/lib/services/queries/get-blogs";
import { deleteBlog } from "@/lib/services/mutations/delete-blog";

export const metadata: Metadata = {
  title: "All blogs",
};

export default async function BlogPage({
  searchParams: { limit, page, search, sort },
}: {
  searchParams: SearchParams;
}) {
  const session = await getAuthSession();

  if (!session) return;

  const userId = session?.user.id;

  const limitNumber = Number(limit);
  const pageNumber = Number(page);

  const sortValues = sort?.split(".");
  const sortBy = sortValues?.[0];
  const orderBy = sortValues?.[1];

  const { blogs, blogsCount } = await getBlogs({
    // userId,
    sortBy,
    orderBy,
    limitNumber,
    pageNumber,
    title: search,
  });

  // console.log("blogsCount", blogsCount);

  // if (!blogs.length) {
  //   return (
  //     <p className="mt-20 text-xl text-center font-bold text-red-500">
  //       No blogs found
  //     </p>
  //   );
  // }

  return (
    <>
      <div className="mt-10 flex justify-end">
        <Link href="/blog/add-blog">
          <Button type="button" className="w-[176px] rounded-full space-x-4">
            <IconPlus />
            <span>New Post</span>
          </Button>
        </Link>
      </div>

      <div className="my-10">
        {blogs && (
          <DataTable
            columns={blogsColumn}
            data={blogs}
            searchBy="blog"
            count={blogsCount}
            deleteAction={deleteBlog}
            manualControl
          />
        )}
      </div>
    </>
  );
}
