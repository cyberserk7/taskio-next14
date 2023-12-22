import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
