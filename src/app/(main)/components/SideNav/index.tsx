"use client";

import Image from "next/image";
import Profile from "../Profile";
import { BadgeDollarSign, Compass, CookingPot, FolderClosed, GitPullRequest, House, MessageSquareQuote, Settings, User, X } from "lucide-react";
import { Poppins } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const SideNav = ({ closeNav }: { closeNav?: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      icon: <House className="w-4 h-4" />,
      path: "/dashboard",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      
      label: "My Requests",
      icon: <GitPullRequest className="w-4 h-4" />,
      path: "/my-requests",
      subPath: "/my-requests/new-request",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      label: "Browse Requests",
      icon: <Compass className="w-4 h-4" />,
      path: "/browse-requests",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      label: "My Pitches",
      icon: <CookingPot className="w-4 h-4" />,
      path: "/my-pitches",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      label: "Transactions",
      icon: <BadgeDollarSign className="w-4 h-4" />,
      path: "/transactions",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      label: "Files",
      icon: <FolderClosed className="w-4 h-4" />,
      path: "/files",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
    {
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
      path: "/settings",
      activeBg: "bg-[#ffe6c3] border border-[#ee8c1d]",
      defaultBg: "border border-[#f0daff]",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen w-[280px] border-r border-r-[#e6e0ea] bg-white">
      <div>
        {/* Mobile close button */}
        <div className="flex justify-end md:hidden p-4">
          <X className="w-6 h-6 cursor-pointer" onClick={closeNav} />
        </div>

        <Image
          className="mx-auto py-2 w-[120px] lg:w-[150px] h-auto"
          src={"/full_icon.svg"}
          height={150}
          width={150}
          alt="Full Icon"
        />
        <nav className="mx-4 my-6 list-none">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path || pathname === item.subPath;

            return (
              <li
                key={index}
                onClick={() => {
                  router.push(item.path);
                  closeNav?.();
                }}
                className={`my-2 cursor-pointer py-2 rounded-xl px-3 flex items-center transition-all duration-300 ${
                  isActive ? item.activeBg : item.defaultBg
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-[#ee8c1d] text-white" : "bg-[#f3edf7]"
                  }`}
                >
                  {item.icon}
                </div>
                <p
                  className={`${poppins.className} ml-2 text-[#48464c] font-medium text-sm hidden sm:block`}
                >
                  {item.label}
                </p>
              </li>
            );
          })}
        </nav>
      </div>
      <div className="md:block">
        <Profile />
      </div>
    </div>
  );
};

export default SideNav;
