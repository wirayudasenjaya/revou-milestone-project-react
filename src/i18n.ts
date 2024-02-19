import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEn from './locales/en/translation.json';
import translationId from './locales/id/translation.json';

const resources = {
  eng: {
    translation: translationEn,
  },

  id: {
    translation: translationId,
  }
}

const language = localStorage.getItem("i18n_language")
if (!language) {
  localStorage.setItem("i18n_language", "en")
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18n_language") || "en",
    fallbackLng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
