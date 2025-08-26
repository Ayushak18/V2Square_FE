"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="max-w-md mx-auto rounded-2xl shadow-md bg-white px-6 py-8">
        <h2 className="text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <a className="block text-center text-[#f7be7a] cursor-pointer font-semibold mt-[8px] mb-2" onClick={() => router.push("/signUp")} href="#">Don't have an account?</a>
        {/* <a
          onClick={() => router.push("/signUp")}
          className="text-center text-[#f7be7a] cursor-pointer font-semibold mt-[8px] mb-2"
        >
          Don't have an account?
        </a> */}
        <form>
          <div className="mb-3">
            <label className="block text-[15px] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Eg: johndoe@gmail.com"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-[15px] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter minimum 8 characters"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-lg placeholder:text-sm bg-[#2AAE77] text-white font-semibold text-lg mt-2 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-6 text-[#888] text-[13px]">
          By registering, you agree to V2 Square's{" "}
          <span className="text-[#599aff] cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#599aff] cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </>
  );
};

export default LoginForm;
