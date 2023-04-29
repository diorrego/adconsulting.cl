const purgecss = {
  '@fullhuman/postcss-purgecss': {
    content: [
      './components/**/*.ts',
      './pages/**/*.ts',
      './components/**/*.tsx',
      './pages/**/*.tsx',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Purge and minify CSS only production builds only
    ...(process.env.postCSS === 'production'
      ? { ...purgecss, cssnano: {} }
      : {}),
  },
};
