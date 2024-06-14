import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import DynamicRouteBlog from './pages/DynamicRouteBlog';
import Error404 from './pages/Error404';
import ControlledComponent from './pages/ControlledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about-us',
      element: <About />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'blog/:id',
      element: <DynamicRouteBlog />
    },
    {
      path: '*',
      element: <Error404 />
    },
    {
      path: 'controlled-component',
      element: <ControlledComponent />
    }
  ]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
