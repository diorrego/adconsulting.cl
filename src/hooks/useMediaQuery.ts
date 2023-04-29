import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

const tailwindConfig = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
      acme: ['"Acme"', ...defaultTheme.fontFamily.sans],
      caption: ['"PT Sans Caption"', ...defaultTheme.fontFamily.sans],
      montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

const useMediaQuery = (size: string) => {
  const [matches, setMatches] = useState(false);

  const { theme } = resolveConfig(tailwindConfig as any);

  const query = theme?.screens
    ? `(min-width: ${theme.screens[size]}`
    : '(min-width: 640px)';

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const updateMatches = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', updateMatches);
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
