import { Poppins } from "next/font/google";
import { Metadata } from "next";
import DashboardPage from "./components";

export const metadata: Metadata = {
  title: 'Dashboard | V2Square',
  description: 'Home to all your professional management needs.',
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Dashboard = () => {
  return (
    <>
    <DashboardPage />
      {/* <div
        className={`${poppins.className} py-4 px-4 md:px-6 text-[#48464c] bg-[#f5f5f7]`}
      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <StatsCard
            title={"Total Profiles"}
            icon={"/icons/profile.svg"}
            stats={1005}
          />
          <StatsCard
            title={"Pending Verification"}
            icon={"/icons/pending_verification.svg"}
            stats={1005}
          />
          <StatsCard
            title={"Verified Profile"}
            icon={"/icons/verified_account.svg"}
            stats={1005}
          />
          <StatsCard
            title={"Flagged Profile"}
            icon={"/icons/flagged_account.svg"}
            stats={1005}
          />
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
