import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import AddAToy from './components/AddAToy/AddAToy.jsx';
import Blogs from './components/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: 'mytoys',
        element: <MyToys></MyToys>
      },
      {
        path: 'addatoy',
        element: <AddAToy></AddAToy>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
