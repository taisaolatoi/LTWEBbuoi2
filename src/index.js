import { router } from './route';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
