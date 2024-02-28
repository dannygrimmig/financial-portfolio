import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ContextProvider } from "./contexts/AppContext";
import { ROUTES } from "./constants/routes";
import { AuthProvider } from "./contexts/AuthContext";

const AppWrapper = () => {
  return (
    <AuthProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: ROUTES,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
