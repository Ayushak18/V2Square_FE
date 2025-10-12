import Image from "next/image";

const ExactlyWhatYouNeedBanner = () => {
  return (
    <>
      <div className="flex text-center items-center justify-center flex-col border border-[#e7e0ec] bg-white w-[60%] p-8 rounded-2xl">
        <Image
          className="mb-6"
          src={"/Icons/search_glass.svg"}
          alt="Search Icon"
          height={30}
          width={30}
        />
        <h1 className="text-xl font-semibold text-[#48464c]">
          Find Exactly What You Need
        </h1>
        <p className="text-[#48464c] py-2">
          Post your requirement and let top sellers compete to fulfil it quick
          and hassle-free!
        </p>
        <button className="bg-[#2AAE77] mt-3 px-3 py-1 rounded-md text-white">
          Get Started Now
        </button>
      </div>
    </>
  );
};

export default ExactlyWhatYouNeedBanner;
