import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./views/error-page";
import ChatPage from "./views/chat-page.tsx";
import ServerPage from "./views/server-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "chat/:id",
                element: <ChatPage />,
            },
            {
                path: "servers/:id",
                element: <ServerPage />,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
