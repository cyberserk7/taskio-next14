import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const brandText = localFont({
  src: "../../../public/fonts/font.woff2",
});

export const Footer = () => {
  return (
    <div className="h-14 flex items-center bg-transparent  border-t ">
      <div className="px-4 md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="hidden md:block">
            <Logo />
          </div>
          <small className="text-gray-500 md:hidden">
            &copy;All Rights Reserved.
          </small>
        </div>
        <div className="flex items-center gap-x-5 text-xs md:text-sm text-gray-500 font-medium">
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};
