// REACT & REACT-ROUTER
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// CSS
import "./assets/css/main.css";
//import reportWebVitals from './reportWebVitals';

// COMPONENTS
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import User from "./components/User/user";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/user.slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: true,
});

function Root() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: (
          <>
            <Header />
            <Home />
          </>
        ),
      },
      {
        path: "sign-in",
        element: (
          <>
            <Header />
            <SignIn />
          </>
        ),
      },
      {
        path: "user",
        element: (
          <>
            <Header />
            <User />
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
