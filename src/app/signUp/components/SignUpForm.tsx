"use client";

import React, { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="max-w-md mx-auto rounded-2xl shadow-md bg-white px-6 py-8">
        <h2 className="text-3xl font-semibold text-center">
          Create a new account
        </h2>
        <p className="text-center text-[#f7be7a] font-semibold mt-[8px] mb-2">
          Already have an account?
        </p>
        <form>
          <div className="mb-3">
            <label className="block text-[15px] mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>
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
            <label className="block text-[15px] mb-1">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="00000-00000"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-[15px] mb-1">Create Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter minimum 8 characters"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[15px] mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter  password"
              className="w-full rounded-lg placeholder:text-sm bg-[#f7f7fa] border border-[#dddddd] focus:border-[#f7be7a] focus:border-2 py-2.5 px-4 text-base focus:outline-none transition-colors duration-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-lg placeholder:text-sm bg-[#2AAE77] text-white font-semibold text-lg mt-2 transition duration-200"
          >
            Continue
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

export default SignUpForm;
