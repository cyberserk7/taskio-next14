import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4  flex items center bg-white border-b shadow-sm">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:w-auto  w-full flex justify-end items-center">
          <Button variant={"ghost"} className="h-[30px] transition">
            Login
          </Button>
          <Button className="bg-neutral-900 h-[33px] transition px-3">
            Join Taskio
          </Button>
        </div>
      </div>
    </div>
  );
};
