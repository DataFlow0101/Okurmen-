import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import SignIn from "./pages/signIn/SignIn";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import EmailSent from "./pages/emailSend/EmailSent";
import ResetPassword from "./pages/ressetPassword/RessetPassword";
import VerifyEmailMessage from "./pages/register/verifyemailmessage/МerifyEmail";
import EmailVerified from "./pages/register/verifyemailmessage/EmailVerified";
import Profile from "./pages/Profile/Profile";
import Cabinet from "./pages/Profile/component/Кабинет/Cabinet";
import Traders from "./pages/Profile/component/Трейдеры/Traders";
import Statistics from "./pages/Profile/component/Статистика/Statistics";
import Instructions from "./pages/Profile/component/Инструкции/Instructions";
import Help from "./pages/Profile/component/Помощь/Help";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/email-sent", element: <EmailSent /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/verify-email-message", element: <VerifyEmailMessage /> },
      { path: "/resend-verification", element: <EmailVerified /> },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          { path: "Cabinet", element: <Cabinet /> },
          { path: "Traders", element: <Traders /> },
          { path: "Statistics", element: <Statistics /> },
          { path: "Instructions", element: <Instructions /> },
          { path: "Help", element: <Help /> },
        ],
      },
    ],
  },
]);
