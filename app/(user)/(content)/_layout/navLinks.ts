import {
  IconBlog,
  IconDashboard,
  IconMedia,
  IconMessage,
  IconSettings,
  IconCategories,
  IconEdit,
} from "@/components/icons";

export const navLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: IconDashboard,
  },
  {
   name: "Content",
   link: "/content",
   icon: IconEdit,
  },
   {
    name: "Message",
    link: "/message",
    icon: IconMessage,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: IconBlog,
    // sublinks: [
    //   { name: "Add Blog", link: "/blog/add-blog" },
    //   { name: "Edit Blog", link: "/blog/edit-blog" },
    //   { name: "View Blog", link: "/blog/view" },
    // ],
  },
  // {
  //   name: "Categories",
  //   link: "/categories",
  //   icon: IconCategories,
  // },
  {
    name: "Settings",
    link: "/settings",
    icon: IconSettings,
  },
];

export type NavLinksProps = typeof navLinks;
