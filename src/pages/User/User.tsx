import { useAuth, UserProfile, SignIn, SignOutButton, RedirectToSignIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const User = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div>
        <h1>Please sign in</h1>
        <RedirectToSignIn />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
      <UserProfile path="/protected/user" routing="hash" />
      <Link to="/privacy">
        <button>Privacy Policy</button>
      </Link>
    </div>
  );
};
