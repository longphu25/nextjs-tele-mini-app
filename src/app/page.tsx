"use client";

import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import { useTranslations } from "next-intl";

import { Link } from "@/components/Link/Link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher/LocaleSwitcher";
import { Page } from "@/components/Page";

import tonSvg from "./_assets/ton.svg";
import { Wallet } from "@/components/cardano/Wallet";
import { DynamicHookComponent } from "@/components/cardano/dynamic-hook";

export default function Home() {
  return (
    <main>
      <Wallet />
    </main>
  );
}
