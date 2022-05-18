module.export = {
  plugins: [
    [
      "sitemap",
      {
        hostname: "https://main--kaleidoscopic-daffodil-c4b63e.netlify.app/#/",
        dateFormatter: () => {
          // 이부분을 넣어줬더니 빌드가 제대로 됐다.
          return new Date().toISOString();
        },
      },
    ],
  ],
};
