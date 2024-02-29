import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './view/Home';
import Team from './view/Team';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
