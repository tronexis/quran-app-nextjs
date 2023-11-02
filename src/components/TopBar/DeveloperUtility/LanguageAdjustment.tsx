import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { ChevronIcon } from "../../icons";
import AdjustmentWrapper from "./AdjustmentWrapper";
import OptionList from "./OptionList";
import useSettings from "@stores/settingsStore";

const LanguageAdjustment = () => {
  const [isExpanded, setExpanded] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const lang = {
    id: "Indonesia",
    en: "English",
  };

  const { language, setLanguage } = useSettings((state) => ({
    language: state.language,
    setLanguage: state.setLanguage,
  }));

  function setLocale(lang: any) {
    // router.push(router.asPath, router.asPath, { locale: lang, scroll: false });
    setLanguage(lang);
  }

  useEffect(() => {
    // setLang(router.locale);
  }, []);

  console.log(pathname);

  return (
    <AdjustmentWrapper title="Bahasa">
      <div
        onClick={() => setExpanded(!isExpanded)}
        className="text-center py-2 px-2 group text-black dark:text-slate-100 bg-gray-100 dark:bg-slate-500 rounded w-32 flex justify-between relative cursor-pointer"
      >
        <span className="font-bold text-sm">{lang[language]}</span>
        <ChevronIcon
          className={classNames("h-5 transform transition-transform", {
            "rotate-180": isExpanded,
          })}
        />

        {/* Lists Language */}
        <ul
          className={classNames(
            "absolute p-2 z-40 bg-white dark:bg-slate-400 w-full left-0 transform transition-all rounded text-left shadow-lg",
            { "visible opacity-100 translate-y-7": isExpanded },
            { "invisible opacity-0 translate-y-4": !isExpanded }
          )}
        >
          <OptionList onClick={() => setLocale("id")}>Indonesia</OptionList>
          <OptionList onClick={() => setLocale("en")}>English</OptionList>
        </ul>
      </div>
    </AdjustmentWrapper>
  );
};

export default LanguageAdjustment;
