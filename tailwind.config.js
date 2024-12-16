/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-y': 'bounceY 4s ease-in-out infinite', 
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(10px)' },  
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
