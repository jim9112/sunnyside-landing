module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary-soft-red': 'hsl(7, 99%, 70%)',
      'primary-yellow': 'hsl(51, 100%, 49%)',
      'primary-dark-cyan': 'hsl(167, 40%, 24%)',
      'primary-dark-blue': 'hsl(198, 62%, 26%)',
      'primary-moderate-cyan': 'hsl(168, 34%, 41%)',
      'neutral-very-dark-blue': 'hsl(212, 27%, 19%)',
      'neutral-very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'neutral-dark-greyish-blue': 'hsl(232, 10%, 55%)',
      'neutral-greyish-blue': 'hsl(210, 4%, 67%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'desktop-header': "url('/images/desktop/image-header.jpg')",
        'mobile-header': "url('/images/mobile/image-header.jpg')",
        'mobile-egg': "url('/images/mobile/image-transform.jpg')",
        'desktop-egg': "url('/images/desktop/image-transform.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
