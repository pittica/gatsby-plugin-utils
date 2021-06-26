module.exports.formatLocale = (locale) => {
  const value = { language: null, locale: null };

  switch (typeof locale) {
    case "object":
      if (locale.language) {
        value.language = locale.language.toLowerCase();
      }

      if (locale.culture) {
        value.culture = locale.culture.toUpperCase();
      }

      break;
    case "string":
      const split = locale.split("_");

      if (split.length > 0) {
        value.language = split[0].toLowerCase();
      }

      if (split.length > 1) {
        value.culture = split[1].toUpperCase();
      }

      break;
    default:
      break;
  }

  return value;
};
