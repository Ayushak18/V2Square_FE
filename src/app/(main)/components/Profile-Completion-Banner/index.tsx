const ProfileCompletionBanner = () => {
  return (
    <div className="h-fit border border-[#e7e0ec] bg-white w-[40%] rounded-2xl px-4 py-6">
      <h1 className="text-xl font-bold text-[#48464c]">
        Profile Completion: 32%
      </h1>
      <div className="w-[20%] h-2 bg-[#2AAE77] rounded-md mt-2"></div>
      <p className="text-[#48464c] font-semibold py-2 mt-2">
        Why Complete Your Profile?
      </p>
      <ul className="text-sm">
        <li className="list-disc list-inside mb-2">
          Adding your GST number ensures business credibility and access to more
          features.
        </li>
        <li className="list-disc list-inside my-2">
          Uploading your brand logo builds trust and makes your profile more
          shareable with other vendors.
        </li>
      </ul>
      <button className="border cursor-pointer border-[#2AAE77] text-[#2AAE77] w-full mt-3 px-3 py-2 rounded-md font-semibold text-sm">
        Complete Profile
      </button>
    </div>
  );
};

export default ProfileCompletionBanner;