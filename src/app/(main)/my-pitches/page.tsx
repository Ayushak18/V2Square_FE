import { Metadata } from "next";
import MyPitchesPage from "./components";

export const metadata: Metadata = {
  title: "My Pitches | V2Square",
  description: "Showcase and manage your professional pitches with V2Square.",
};

const MyPitches = () => {
  return (
    <>
      <div className="bg-[#f5f5f7] h-[calc(100vh-70px)]">
        <MyPitchesPage />
      </div>
    </>
  );
};

export default MyPitches;
