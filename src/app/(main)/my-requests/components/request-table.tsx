// components/StatusTable.tsx
import { EllipsisVertical, Search } from "lucide-react";
import React from "react";

type Status = "Open" | "Draft" | "Pending" | "Closed";

interface TableRow {
  productService: string;
  quantity: string;
  budgetRange: string;
  status: Status;
  pitches: number;
  postedOn: string;
}

interface StatusTableProps {
  data: TableRow[];
}

const statusClass = (status: Status) => {
  switch (status) {
    case "Open":
      return "bg-green-100 text-green-600";
    case "Draft":
      return "bg-gray-100 text-gray-600";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Closed":
      return "bg-red-100 text-red-600";
    default:
      return "";
  }
};

const StatusTable: React.FC<StatusTableProps> = ({ data }) => (
  <>
    <div className="p-3 my-4 rounded-3xl bg-[#e9eef6] flex items-center w-[60%]">
      <Search />
      <input
        type="text"
        className="w-full outline-none ml-2 placeholder:text-black"
        placeholder="Search requests"
      />
    </div>
    <div className="overflow-x-auto my-4 border border-[#e7e0ec] rounded-2xl">
      <table className="min-w-full bg-white rounded-xl">
        <thead>
          <tr>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c] rounded-tl-xl">
              Product/Service
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c]">
              Quantity
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c]">
              Budget Range
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c]">
              Status
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c]">
              Pitches
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c] rounded-tr-xl">
              Posted On
            </th>
            <th className="py-3 px-6 text-center font-bold text-sm text-[#48464c] rounded-tr-xl">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border border-gray-100 hover:bg-[#f5f5f5] transition"
            >
              <td className="py-4 px-6 text-center text-sm ">
                {row.productService}
              </td>
              <td className="py-4 px-6 text-center text-sm ">{row.quantity}</td>
              <td className="py-4 px-6 text-center text-sm ">
                {row.budgetRange}
              </td>
              <td className="py-4 px-6 text-center text-sm ">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm  font-medium ${statusClass(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="py-4 px-6 text-center text-sm ">{row.pitches}</td>
              <td className="py-4 px-6 text-center text-sm ">{row.postedOn}</td>
              <td className="py-4 flex items-center justify-center text-sm cursor-pointer">
                <EllipsisVertical className="text-center" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default StatusTable;
