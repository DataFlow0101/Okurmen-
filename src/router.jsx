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
import Header from "./components/Header/Header";






export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/signIn",
                element: <SignIn />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/email-sent",
                element: <EmailSent />,
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
            },
            {
                path: "/verify-email-message",
                element: <VerifyEmailMessage />,
            },
            {
                path: "/resend-verification",
                element: <EmailVerified />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "Header",
                element: <Header />,
            }
        ]
    }
])