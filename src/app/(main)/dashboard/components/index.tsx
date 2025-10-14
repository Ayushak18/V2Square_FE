import ProfileCompletionBanner from "../../components/Profile-Completion-Banner";
import ExactlyWhatYouNeedBanner from "../../components/What-you-need-banner";
import DashboardRecommendations from "./Dashboard-recommendations";

const DashboardPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-70px)] p-4 overflow-y-scroll bg-[#f5f5f7]">
        <div className="flex gap-4 justify-between">
          <ExactlyWhatYouNeedBanner />
          <ProfileCompletionBanner />
        </div>
        <div>
          <DashboardRecommendations />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
