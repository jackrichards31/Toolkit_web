"use client";

import Header from "@/components/Profile/Header";
import ProfileBody from "@/components/Profile/ProfileBody";
import SideProfileBar from "@/components/Profile/SideProfileBar";

export default function ProfilePage({ id }: { id: string }) {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="flex max-h-fit w-2/3 space-y-6 rounded-lg border p-10 pb-16 shadow-md md:block">
        <Header />
        <div
          data-orientation="horizontal"
          role="none"
          className="my-6 h-px w-full shrink-0 bg-border"
        />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <SideProfileBar />
          <ProfileBody />
        </div>
      </div>
    </section>
  );
}
