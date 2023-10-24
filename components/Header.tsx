import React from "react";
import Link from "next/link";
import { Tilt_Neon } from "next/font/google";
import { twMerge } from "tailwind-merge";
import initTranslations from "@/app/i18n";

const tiltNeon = Tilt_Neon({ subsets: ["latin"] });
const i18nNamespaces = ["header"];

export default async function Header({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <div className="bg-gray-800 flex justify-between items-center px-8 py-2">
      <div className={twMerge(tiltNeon.className, "text-3xl text-blue-400 font-semibold")}>
        alpha7xcoder
      </div>
      <div className="flex gap-4">
        <Link className="text-blue-400 text-xl" href="/">{t("home")}</Link>
        <Link className="text-blue-400 text-xl" href="/blogs">{t("blogs")}</Link>
        <Link className="text-blue-400 text-xl" href="/projects">{t("projects")}</Link>
        <Link className="text-blue-400 text-xl" href="/about">{t("about")}</Link>
        <Link className="text-blue-400 text-xl" href="/contact">{t("contact")}</Link>
      </div>
    </div>
  );
}
