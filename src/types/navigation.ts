export interface NavItem {
  key: string;
  href: string;
}

export interface LanguageOption {
  code: keyof typeof SUPPORTED_LANGUAGES;
  name: string;
}

export const SUPPORTED_LANGUAGES = {
  en: 'English',
  de: 'Deutsch',
  lv: 'Latviešu',
  es: 'Español'
} as const;

export interface NavigationProps {
  className?: string;
}