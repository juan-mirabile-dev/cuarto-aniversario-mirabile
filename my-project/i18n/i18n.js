import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import home from '../locals/home.json';
import about from '../locals/about.json';
// Agrega más archivos según sea necesario

const resources = {
  en: {
    ...home,
    ...about,
    // Agrega más secciones aquí
  },
  es: {
    ...home,
    ...about,
    // Agrega más secciones aquí
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",        // Idioma predeterminado
    fallbackLng: "en", // Idioma de reserva
    interpolation: {
      escapeValue: false // React ya hace escaping
    }
  });

export default i18n;
