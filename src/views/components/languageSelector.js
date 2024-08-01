// import React from "react";
// import { useTranslation } from "react-i18next";

// const languages = [
//   { code: "en", lang: "English" },
//   { code: "fr", lang: "French" },
//   { code: "hi", lang: "Hindi" },
// ];

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     console.log("ChangeLanguage: ", lng);
//   };

//   return (
//     <div className="flex gap-3">
//       {languages.map((lng) => {
//         return (
//           <button
//             className="p-2 border rounded-md"
//             key={lng.code}
//             onClick={() => changeLanguage(lng.code)}
//           >
//             {lng.lang}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default LanguageSelector;

import React from "react";

const LanguageSelector = () => {
  const handleLanguageChange = (lang) => {
    const selectField = document.querySelector("select.goog-te-combo");
    if (selectField) {
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    // Add more languages as needed
  ];
  return (
    <select
      className="custom-language-selector"
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
};

export default LanguageSelector;
