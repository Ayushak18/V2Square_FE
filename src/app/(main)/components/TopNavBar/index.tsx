import { Cabin } from "next/font/google";
import { Bell, Menu, MessageSquare } from "lucide-react";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400"],
});

const TopNavBar = ({ toggleNav }: { toggleNav?: () => void }) => {
  return (
    <div className="h-[60px] md:h-[70px] border-b border-b-[#e6e0ea] flex items-center px-4 md:px-6 bg-white">
      {/* Hamburger on mobile */}
      <button
        className="mr-4 md:hidden"
        onClick={toggleNav}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex justify-between items-center w-full">
        <p
          className={
            cabin.className + " font-medium text-lg md:text-2xl truncate"
          }
        >
          Welcome, Ayush Kamboj
        </p>

        <div>
          <button className="mx-4 cursor-pointer bg-[#E9EEF6] rounded-md px-6 py-2 text-[#48464c] font-semibold text-sm">
            {" "}
            <MessageSquare className="inline-block mr-1 w-6 h-5" /> Messages
          </button>
          <button className="bg-[#E9EEF6] cursor-pointer rounded-md px-6 py-2 text-[#48464c] font-semibold text-sm">
            <Bell className="inline-block mr-1 w-6 h-5" />
            Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
