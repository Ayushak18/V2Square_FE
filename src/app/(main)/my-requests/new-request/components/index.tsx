import NewRequestForm from "./new-request-form";

const NewRequestPage = () => {
  return (
    <>
      <div className="py-4 px-6 bg-[#f5f5f7] h-[calc(100vh-70px)] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[#48464c] font-semibold text-lg">
            Request for Product/Service details
          </h1>
        </div>

        <NewRequestForm />
      </div>
    </>
  );
};

export default NewRequestPage;
