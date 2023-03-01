import { UserButton, SignedIn } from "@clerk/clerk-react";

export const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <h1 className="text-3xl font-bold text-primary">SafePlay+</h1>
      <SignedIn>
        <UserButton userProfileMode="navigation" userProfileUrl="/protected/user" />
      </SignedIn>
    </div>
  );
};
