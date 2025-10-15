import MyPitchesTable from "./my-pitches-table";

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

const MyPitchesPage = () => {
  return (
    <>
      <div className="py-4 px-6 bg-[#f5f5f7] h-[calc(100vh-70px)]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#48464c] font-semibold text-xl">My Pitches</h1>
        </div>
        <MyPitchesTable data={tableData} />
      </div>
    </>
  );
};

export default MyPitchesPage;
