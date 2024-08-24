export const pagesLinks = [
  {
    name: "contact data",
    link: "/content/contact-data",
  },
  {
    name: "home page",
    link: "/content/home-page",
  },
  {
    name: "about me page",
    link: "/content/about-page",
  },
  {
    name: "services page",
    link: "/content/services-page",
  },
  {
    name: "my therapies",
    link: "/content/my-therapies",
  }
];

export const homeDefaultValues = {
  en: {
    metadata: {
      title: "",
      description: "",
    },
    home1: {
      title: "",
      text: "",
      linkText: "",
    },
  },
  es: {
    metadata: {
      title: "",
      description: "",
    },
    home1: {
      title: "",
      text: "",
      linkText: "",
    },
  },
};

export enum PublishTypes {
  HOME_PAGE = "homePage",
  ABOUT_PAGE = "aboutPage",
  CONTACT_DATA= "contactData",
  SERVICES_PAGE="servicesPage",
  THERAPIES_DATA="therapiesData",

}
