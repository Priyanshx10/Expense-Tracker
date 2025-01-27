"use client";

import React from "react";
import Link from "next/link";
import { useUser, UserButton, SignIn, SignInButton } from "@clerk/nextjs";
import { Goal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex items-center flex-row">
        <Goal className="size-[25px] text-blue-700" />
        <span className="text-blue-700 font-bold text-xl pl-1">PR-Finance</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-4 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="bg-black">
              DashBoard
            </Button>
          </Link>
          <Link href="/getStarted">
            <Button variant="outline">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
