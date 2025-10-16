"use client";

import StatusTable from "./request-table";
import { useRouter } from "next/navigation";

const tableData: any = [
  {
    productService: "Business Laptop",
    quantity: "200 units",
    budgetRange: "₹15K – ₹20K",
    status: "Open",
    pitches: 5,
    postedOn: "08 Jun 2025",
  },
  {
    productService: "Business Laptop",
    quantity: "200 units",
    budgetRange: "₹15K – ₹20K",
    status: "Draft",
    pitches: 5,
    postedOn: "08 Jun 2025",
  },
  {
    productService: "Business Laptop",
    quantity: "200 units",
    budgetRange: "₹15K – ₹20K",
    status: "Pending",
    pitches: 5,
    postedOn: "08 Jun 2025",
  },
  {
    productService: "Business Laptop",
    quantity: "200 units",
    budgetRange: "₹15K – ₹20K",
    status: "Closed",
    pitches: 5,
    postedOn: "08 Jun 2025",
  },
];

const MyRequestPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="py-4 px-6 bg-[#f5f5f7] h-[calc(100vh-70px)]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#48464c] font-semibold text-xl">My Requests</h1>
          <button
            onClick={() => router.push("/my-requests/new-request")}
            className="cursor-pointer bg-[#2AAE77] font-semibold text-sm px-4 py-2 rounded-lg text-white"
          >
            Post New Request
          </button>
        </div>
        <StatusTable data={tableData} />
      </div>
    </>
  );
};

export default MyRequestPage;
