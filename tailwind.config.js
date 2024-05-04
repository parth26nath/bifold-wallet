// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5869E6",
        secondary: "#733DF5",
        grey1: "#FFFFFF",
        grey2: "#B9B9B9",
        grey3: "#8E8E8E",
        grey4: "#5F5F5F",
        grey5: "#454545",
        grey6: "#212228",
        negative: "#D81919",
        positive: "#28A81D",
        negativebg: "#FFE6E6",
        positivebg: "#EAFFE8",
        primarybg: "#F0F5FF",
        divColor: "#F0F5FF",
        downsecondary: '0 4px 12px 0 rgba(33, 34, 40, 0.1)',
      },
    },
  },
  plugins: [],
}