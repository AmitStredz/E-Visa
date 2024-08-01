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

import React, { useState } from "react";

// import turkeyFlag from '../assets/turkeyFlag.webp';
// import IndiaFlag from '../assets/indiaFlag.webp';
// import ChinaFlag from '../assets/chinaFlag.webp';
// import ArabicFlag from '../assets/arabicFlag.webp';
// import GermanFlag from '../assets/germanFlag.webp';
// import EspanolFlag from '../assets/espanolFlag.webp';

const LanguageSelector = ({onclose}) => {
  const [isSelected, setISelected] = useState("en");

  const handleLanguageChange = (lang) => {
    onclose();
    setISelected(lang);
    const selectField = document.querySelector("select.goog-te-combo");
    if (selectField) {
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  // const languages = [
  //   { code: "en", name: "English" },
  //   { code: "fr", name: "Français" },
  //   { code: "es", name: "Español" },
  //   { code: "de", name: "Deutsch" }, // German
  //   { code: "zh-CN", name: "简体中文" }, // Simplified Chinese
  //   { code: "zh-TW", name: "繁體中文" }, // Traditional Chinese
  //   { code: "ar", name: "العربية" }, // Arabic
  //   { code: "hi", name: "हिन्दी" }, // Hindi
  //   { code: "tr", name: "Türkçe" }, // Turkish
  // ];

  return (
    <div className="flex gap-1 flex-wrap items-center justify-center w-full">
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "en"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        <img src="/assets/americaFlag.webp" className="w-5"></img>
        English
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "ar"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("ar")}
      >
        <img src="/assets/arabicFlag.webp" className="w-5"></img>
        العربية
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "fr"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("fr")}
      >
        <img src="/assets/frenchFlag.webp" className="w-5"></img>
        Français
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "de"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("de")}
      >
        <img src="/assets/germanFlag.webp" className="w-5"></img>
        Deutsch
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "es"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("es")}
      >
        <img src="/assets/espanolFlag.webp" className="w-5"></img>
        Español
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "zh-CN"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("zh-CN")}
      >
        <img src="/assets/chinaFlag.webp" className="w-5"></img>
        简体中文
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "zh-TW"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("zh-TW")}
      >
        <img src="/assets/chinaFlag.webp" className="w-5"></img>
        繁體中文
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "hi"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("hi")}
      >
        <img src="/assets/indiaFlag.webp" className="w-5"></img>
        हिन्दी
      </button>
      <button
        className={`flex items-center gap-1 p-1 px-4 border rounded-lg hover:border-slate-500 transition-all ${
          isSelected == "tr"
            ? "border-slate-600 bg-black bg-opacity-30 "
            : "border-slate-400"
        }`}
        onClick={() => handleLanguageChange("tr")}
      >
        <img src="/assets/turkeyFlag.webp" className="w-5"></img>
        Türkçe
      </button>
    </div>
  );
};

export default LanguageSelector;
