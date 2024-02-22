"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {DarkModeSwitch} from "./DarkModeSwitch";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <DarkModeSwitch defaultSelected={theme === 'light' ? 1 : 0} onChange={() => setTheme(theme === 'light' ? 'dark': 'light')} />
  )
};