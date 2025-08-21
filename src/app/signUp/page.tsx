"use client";

import SignUpForm from "./components/SignUpForm";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[50%]">
          
          <SignUpForm />
        </div>
        <Image className="w-[50%] h-screen" src={"/login/test1.png"} height={100} width={100} alt="Login Image" />
      </div>
    </>
  );
};
``;

export default Login;
