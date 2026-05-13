export const SITE = {
  website: "https://blog.danisaacs.net/",
  author: "Dan Isaacs",
  profile: "https://www.danisaacs.net/",
  desc: "danisaacs.net: the blog",
  title: "danisaacs.net: the blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/di-dc/danisaacs.net/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
} as const;
