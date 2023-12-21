import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition gap-x-2 flex items-center">
        <Image src={"/logo.svg"} alt="logo" height={28} width={28} />
        <p
          className={cn(
            "text-xl text-neutral-700 pb-1 leading-none mt-2",
            headingFont.className
          )}
        >
          Taskio
        </p>
      </div>
    </Link>
  );
};
