import ExactlyWhatYouNeedBanner from "../../components/What-you-need-banner";

const DashboardPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-70px)] p-6 overflow-y-scroll bg-[#f5f5f7]">
        <ExactlyWhatYouNeedBanner />
      </div>
    </>
  );
};

export default DashboardPage;
