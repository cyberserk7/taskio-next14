"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRightSquare, Medal } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex items-center justify-center flex-col h-[calc(100vh-56px)]">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          top task management
        </div>
        <h1 className="text-4xl md:text-6xl text-center text-neutral-800 mb-4">
          Taskio helps teams move
        </h1>
        <div className="text-4xl md:text-6xl bg-gradient-to-r from-fuchsia-700 to-pink-700 text-white px-4 p-2 rounded-md py-3 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-md md:text-lg text-neutral-500 mt-6 max-w-xs md:max-w-2xl text-center mx-auto leading-1 block",
          textFont.className
        )}
      >
        Transform how your team collaborates, manages projects, and elevates
        productivity
        <span className="hidden">
          - from corporate towers to the comfort of home offices. Embrace your
          team's unique work style.{" "}
        </span>{" "}
        Accomplish it all with Taskio.
      </div>
      <Button
        className="mt-6 h-[40px] px-3 bg-neutral-900"
        asChild
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={"/sign-up"} className={`flex gap-x-1 text-sm`}>
          Get Taskio for free
          {/* <ArrowRight size={18} /> */}
        </Link>
      </Button>
    </div>
  );
}
