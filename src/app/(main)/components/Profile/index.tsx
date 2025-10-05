import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      {" "}
      <div
        onClick={() => router.push("/profile")}
        className="flex items-center justify-center border-t border-t-[#e6e0ea] py-4 mx-6 cursor-pointer"
      >
        <Image
          className=""
          src={"/profile_placeholder.svg"}
          height={40}
          width={40}
          alt="Profile Placeholder Image"
        />
        <div className="mx-4">
          <h1 className="font-medium">Ayush Kamboj</h1>
          <p className="text-xs text-[#818184]">XYZ PVT LTD</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
