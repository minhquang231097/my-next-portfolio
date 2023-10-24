"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/i18nConfig";
import { ChangeEvent } from "react";
import VNFlag from "@/public/vietnam.png";
import ENFlag from "@/public/united-kingdom.png";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <select onChange={handleChange} value={currentLocale} className="border border-black rounded w-32">
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
      <Image
        src={currentLocale === "en" ? ENFlag.src : VNFlag.src}
        alt={currentLocale === "en" ? "en" : "vi"}
        width={32}
        height={32}
      />
    </div>
  );
}
