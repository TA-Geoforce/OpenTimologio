import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'gr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            home: "Home",
            version: "Version",
            info: "Info",
            welcome: "Welcome to OpenTimologio.",
            version_info: "The version is ",
            language: "Language",
            popUser: "Account User",
            popBooks: "Books",
            name: "Username",
            surname: "Surname",
            nameError1: "First name is mandatory.",
            nameError2: "First name must be at least 3 characters.",
            surnameError1: "Surname is mandatory.",
            surnameError2: "Surname must be at least 3 characters."
          }
        }
      },
    }
  });

export default i18n;
