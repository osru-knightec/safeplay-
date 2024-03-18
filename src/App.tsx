import { BrowserRouter, HashRouter, Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { Privacy } from "./pages/Privacy/Privacy";
import { User } from "./pages/User/User";
import {
  useAuth,
  RedirectToSignIn,
  ClerkProvider,
  SignIn,
  SignUp,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Header } from "./components/Header/Header";

function ProtectedPage() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
    </>
  );
}

function PublicPage() {
  return (
    <>
      <Outlet />
    </>
  );
}

function RouteList() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
      appearance={{ variables: { colorPrimary: "#ea580c" } }}
    >
      <Header />
      <Routes>
        <Route path="/protected" element={<ProtectedPage />}>
          <Route path="user/*" element={<User />} />
          <Route path="" element={<Navigate to="/protected/user" />} />
        </Route>
        <Route path="/" element={<PublicPage />}>
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="sign-in/*" element={<SignIn path="/sign-in" redirectUrl={"/protected/user"} routing="path" />} />
          <Route path="sign-up/*" element={<SignUp routing="hash" path="/sign-up" />} />
          <Route path="sign-out/*" element={<SignOutButton />} />
          <Route path="" element={<Navigate to="/protected/user" />} />
        </Route>
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
}

export default App;
