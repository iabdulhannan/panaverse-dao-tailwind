/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        panaverseRed: '#D3102D',
        'gray-450': '#718096',
      },
      backgroundImage: {
        'specializedBackground': "linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)",
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
}
