"use client";

import SignUpForm from "./components/SignUpForm";
import Image from "next/image";

const SignUp = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{
        background:
          "linear-gradient(to top, #ffe6c3 0%, #ffe6c3 50%, #fef7ff 50%, #fef7ff 100%)",
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <SignUpForm />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Image
          className="w-full h-full object-contain py-4"
          src={"/SignUp/SignUp_Hero.svg"}
          height={700}
          width={700}
          alt="SignUp Image"
          priority
        />
      </div>
    </div>
  );
};

export default SignUp;
