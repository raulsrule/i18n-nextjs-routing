const langs = require("./public/langs.json");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: Object.keys(langs),
  },
};
