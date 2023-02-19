import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { default as Backend, default as XHR } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const detection = {
  order: ['navigator', 'querystring'],
  lookupQuerystring: 'lng',
};

const supportedLngs = ['en', 'pt'];

const configBase = {
  fallbackLng: i18next.options.lng,
  detection,
  supportedLngs,
  interpolation: {
    escapeValue: false,
  },
};

i18next
  .use(XHR)
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init(configBase);
