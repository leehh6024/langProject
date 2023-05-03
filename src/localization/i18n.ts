import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translations.json";
import translationKR from "./kr/translations.json";

export const resources = {
    en: {
        translation: translationEN,
    },
    kr: {
        translation: translationKR,
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'kr',
    fallbackLng: 'kr',
    interpolation: {
        escapeValue: false,
    },
})