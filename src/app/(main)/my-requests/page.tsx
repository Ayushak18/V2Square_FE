import { Metadata } from "next";
import MyRequestPage from "./components";

export const metadata: Metadata = {
  title: "My Requests | V2Square",
  description: "Manage and track your professional requests with V2Square.",
};

const MyRequests = () => {
  return (
    <>
      <MyRequestPage />
    </>
  );
};

export default MyRequests;
