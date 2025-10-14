const DashboardRecommendations = () => {
  return (
    <div className="bg-white px-6 py-4 rounded-2xl shadow-md my-4 w-[60%]">
      <div className="flex justify-between items-center text-[#48464c]">
        <h2 className="text-xl font-bold leading-10">
          Recommended Requests for You
        </h2>
        <p className="font-medium leading-6">View All</p>
      </div>
      <ul className="my-4 space-y-2">
        <li className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
          Recommendation 1
        </li>
        <li className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
          Recommendation 2
        </li>
        <li className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
          Recommendation 3
        </li>
      </ul>
    </div>
  );
};

export default DashboardRecommendations;
