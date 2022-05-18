module.export = {
  plugins: [
    [
      "sitemap",
      {
        hostname: "https://main--kaleidoscopic-daffodil-c4b63e.netlify.app/#/",
        dateFormatter: val => {
          return new Date().toISOString();
        },
      },
    ],
  ],
};
