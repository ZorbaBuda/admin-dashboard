export const pagesLinks = [
  {
    name: "home page",
    link: "/content/home-page",
  },
  {
    name: "about page",
    link: "/content/about-page",
  },
];

export const homeDefaultValues = {
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

export enum PublishTypes  {
    HOME_PAGE = "homePage",
    ABOUT_PAGE = "aboutPage",
}
