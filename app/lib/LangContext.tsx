"use client";

import { useState, useEffect } from "react";
import { Lang, t, TKeys } from "./i18n";

// ── Global store (module-level, outside React) ──────────────────────────────
let _lang: Lang = "es";
const _listeners = new Set<(lang: Lang) => void>();

function _setLang(lang: Lang) {
  _lang = lang;
  _listeners.forEach((fn) => fn(lang));
}

// ── Hook ─────────────────────────────────────────────────────────────────────
/**
 * useLang — accede al idioma actual y permite cambiarlo.
 * Usa un store global con suscripciones para garantizar re-renders
 * en todos los componentes que consumen este hook.
 */
export function useLang() {
  const [lang, setLangLocal] = useState<Lang>(_lang);

  useEffect(() => {
    _listeners.add(setLangLocal);
    return () => {
      _listeners.delete(setLangLocal);
    };
  }, []);

  const tr = (key: TKeys): string => t[lang][key] as string;

  return { lang, setLang: _setLang, tr };
}

// ── Provider ─────────────────────────────────────────────────────────────────
export function LangProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
