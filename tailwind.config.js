/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        // adjust speed according to your need
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        }
      },
      colors: {
        "neutral-100": "#fff",
        black: "#000",
        darkgray: "#a2a2a2",
        gray: {
          "100": "#282828",
          "200": "#262626",
          "300": "#1f1f1f",
          "400": "#11142d",
          "500": "#0a0a0a",
          "600": "#08080a",
          "700": "rgba(255, 255, 255, 0)",
          "800": "rgba(0, 0, 0, 0.06)",
          "900": "rgba(0, 0, 0, 0.07)",
          "1000": "rgba(255, 255, 255, 0.1)",
          "1100": "rgba(0, 0, 0, 0.5)",
          "1200": "rgba(0, 0, 0, 0.61)",
        },
        dimgray: {
          "100": "#696969",
          "200": "#646464",
          "300": "#636363",
        },
        darkslategray: {
          "100": "#42526b",
          "200": "#4a4a4a",
          "300": "#3d3d3d",
        },
        mediumslateblue: {
          "100": "#8769fa",
          "200": "#6241d4",
        },
        blueviolet: {
          "100": "#5b47fb",
          "200": "rgba(91, 71, 251, 0.05)",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "#b4b6c4",
        },
        midnightblue: "#060c3b",
        "primary-color-1": "#4a3aff",
        ghostwhite: {
          "100": "#f7f7ff",
          "200": "#f7f6ff",
        },
        whitesmoke: "#f3f3f3",
        lightslategray: "#92929d",
        lavender: "rgba(222, 218, 254, 0.1)",
        mediumpurple: "#ad95ff",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        "website-body-body-large-regular": "Chivo",
      },
      borderRadius: {
        xl: "20px",
        "9xs-3": "3.3px",
        "mid-2": "17.2px",
        "4xs-6": "8.6px",
        "11xs-1": "1.1px",
        "50xl-7": "69.7px",
        "3xs": "10px",
        "xl-5": "20.5px",
        "6xl": "25px",
        "3xl-2": "22.2px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "lgi-4": "19.4px",
      "base-7": "15.7px",
      lg: "18px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "36xl-8": "55.8px",
      "26xl": "45px",
      "14xl": "33px",
      "21xl": "40px",
      "33xl": "52px",
      "23xl": "42px",
      "12xl": "31px",
      "5xl": "24px",
      "lgi-3": "19.3px",
      "4xl-6": "23.6px",
      mid: "17px",
      "lgi-1": "19.1px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    
   
    
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    }
  },
};
