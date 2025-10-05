import { Cabin } from "next/font/google";
import { Menu } from "lucide-react";

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

      <p
        className={
          cabin.className +
          " font-medium text-lg md:text-2xl truncate"
        }
      >
        Welcome, Ayush Kamboj
      </p>
    </div>
  );
};

export default TopNavBar;
