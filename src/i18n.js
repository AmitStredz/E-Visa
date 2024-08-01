import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      greeting: "Welcome !",
      "description": "This is an example of language switching."
    }
  },
  fr: {
    // translation: {
    // //   greeting: "Bienvenue !",
    //   "description": "Ceci est un exemple de changement de langue."
    // }
  },
  hi: {
    translation: {
      greeting: "स्वागत है !",
      "description": "Ceci est un exemple de changement de langue."
    }
  },
  // Add more languages here
};

i18n
  .use(LanguageDetector).use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
