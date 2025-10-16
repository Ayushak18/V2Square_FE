import { Metadata } from "next";
import NewRequestPage from "./components";

export const metadata: Metadata = {
  title: "New Request | V2Square",
  description: "Create and submit new professional requests with V2Square.",
};

const NewRequest = () => {
  return (
    <>
      <NewRequestPage />
    </>
  );
};

export default NewRequest;
