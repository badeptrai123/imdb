"use client";
import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ) : (
          <BsMoonFill
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ))}
    </>
  );
}
