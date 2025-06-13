// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to Visit Google'
// };
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Optional custom component
function MyApp() {
  return (
    
      App
  );
}

// Using React.createElement manually
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to Visit Google'
);

// Render the element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {reactElement}
  </StrictMode>
);
