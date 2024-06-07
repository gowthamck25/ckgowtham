import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-750: #343a40;
  --color-grey-800: #1f2937;
  --color-grey-850: #212529;
  --color-grey-900: #111827;

  --color-yellow-100: #f9f8f4;
  --color-biscut-400: #b9a889;
  --color-green-500: #40c057;
  --color-orange-50: #fff3e5;
  --color-orange-700: #ed7a3d;

  --color-orange-0: #fff4e6;
  --color-orange-50: #ffe8cc;
  --color-orange-100: #ffd8a8;
  --color-orange-200: #ffc078;
  --color-orange-300: #ffa94d;
  --color-orange-400: #ff922b;
  --color-orange-500: #fd7e14;
  --color-orange-600: #f76707;
  --color-orange-800: #e8590c;
  --color-orange-900: #d9480f;

  --color-indigo-0: #edf2ff;
  --color-indigo-50: #dbe4ff;
  --color-indigo-100: #bac8ff;
  --color-indigo-200: #91a7ff;
  --color-indigo-200: #748ffc;
  --color-indigo-300: #5c7cfa;
  --color-indigo-400: #4c6ef5;
  --color-indigo-500: #4263eb;
  --color-indigo-600: #3b5bdb;
  --color-indigo-700: #364fc7;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

   /* For dark mode */
   --image-grayscale: 0;
  --image-opacity: 100%;
  }

  &.dark-mode {
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }

   /* Indigo */
   --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow-x: hidden;
  position: relative;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--color-grey-600);
  outline-offset: -1px; */
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
}

*:focus {
   outline: none;
  /*box-shadow: 0 0 0 0.8rem rgb(253, 126, 20, 0.25);  */
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  /* hyphens: auto; */
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

.scroll-link {
  &:link,
  &:visited {
    color: var(--color-grey-500);
    font-size: 1.8rem;
    letter-spacing: 0.25px;
    font-weight: 500;
    transition: all 0.3s;
  }

  &:active, &:hover,
  &.active:link,
  &.active:visited
    {
    color: var(--color-indigo-500);
  } 
}

.scroll-link-active {
  color: var(--color-indigo-500) !important;
}

 /* Sticky Header */
.sticky .header {
    position: fixed ;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 8rem;
    padding-top: 0;
    padding-bottom: 0;
    background-color: rgb(255, 255, 255, 0.97);
    z-index: 999;
    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  }
  
  .sticky .section-home {
    margin-top: 9.3rem;
  }

  // Connect Form Display
  .connect-window-open .connect-window-overlay {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
    transform: translateY(0);
   }
`;

// Font sizes (px):
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

export default GlobalStyles;
