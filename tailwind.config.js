module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary-soft-red': 'hsl(7, 99%, 70%)',
      'primary-yellow': 'hsl(51, 100%, 49%)',
      'primary-dark-cyan': '#2C7566',
      'primary-dark-blue': 'hsl(198, 62%, 26%)',
      'primary-moderate-cyan': '#90D4C6',
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
        'mobile-glass': "url('/images/mobile/image-stand-out.jpg')",
        'desktop-glass': "url('/images/desktop/image-stand-out.jpg')",
        'mobile-cherry': "url('/images/mobile/image-graphic-design.jpg')",
        'desktop-cherry': "url('/images/desktop/image-graphic-design.jpg')",
        'mobile-orange': "url('/images/mobile/image-photography.jpg')",
        'desktop-orange': "url('/images/desktop/image-photography.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
