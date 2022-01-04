module.exports = {
  mode: 'aot',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./{apps,libs}/src/**/*.{html,scss,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
