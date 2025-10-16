"use client";

import { useState } from "react";
import { CircleX, FolderOpenDot } from "lucide-react";
import CustomOverlay from "@/app/(main)/components/Overlay";

const NewRequestForm = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <div className="w-[60%]">
        <div className="bg-white border border-[#CFDBE8] p-4 mt-8 mb-0 rounded-2xl">
          <h1 className="font-bold text-xl leading-7 text-[#48464c]">
            Add Product/Service details
          </h1>

          <form className="my-4">
            <label className="text-[#48464c]">
              Select category
              <input
                type="text"
                className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                placeholder="e.g., Electronics, Furniture"
              />
            </label>

            <div className="flex items-center gap-2 my-6">
              <label className="text-[#48464c] w-full">
                Product Specification
                <input
                  type="text"
                  className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  placeholder="e.g., HP Pavilion 15, 8GB RAM, SSD"
                />
              </label>
              <label className="text-[#48464c] w-full">
                Quantity
                <input
                  type="number"
                  className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  placeholder="e.g., 10 units"
                />
              </label>
            </div>

            <div className="flex items-center gap-2 my-6">
              <label className="text-[#48464c] w-full">
                Min. Budget Range
                <input
                  type="text"
                  className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  placeholder="e.g., 50K"
                />
              </label>
              <label className="text-[#48464c] w-full">
                Max. Budget Range
                <input
                  type="number"
                  className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  placeholder="e.g., 80K"
                />
              </label>
            </div>

            <label className="text-[#48464c] w-full">
              Additional Details
              <textarea
                rows={4}
                placeholder="Purpose, delivery timeline, brand preferences…"
                className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
              ></textarea>
            </label>

            <div className="p-2 rounded-2xl w-fit flex items-center gap-2">
              <input id="file-upload" type="file" className="hidden" />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 px-5 py-2 bg-[#EEF0F6] text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition hover:bg-gray-200"
              >
                <FolderOpenDot className="h-6 w-6 text-gray-600" />
                <span className="font-medium text-gray-700">Attach file</span>
              </label>
            </div>
          </form>
        </div>

        <div className="bg-white border border-[#CFDBE8] p-4 my-4 rounded-2xl">
          <h1 className="font-bold text-xl leading-7 text-[#48464c]">
            Add Address
          </h1>

          <form className="my-4">
            <label className="text-[#48464c] w-full">
              Address
              <textarea
                rows={4}
                placeholder="House No., Street, Area"
                className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
              ></textarea>
            </label>
            <label className="text-[#48464c]">
              City
              <input
                type="text"
                className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                placeholder="e.g., Mumbai"
              />
            </label>
            <label className="text-[#48464c]">
              State
              <input
                type="text"
                className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                placeholder="e.g., Maharashtra"
              />
            </label>

            <label className="text-[#48464c]">
              Pincode
              <input
                type="number"
                className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                placeholder="e.g., 400001"
              />
            </label>
            <label className="text-[#48464c]">
              <input className="mt-4" type="checkbox" /> Make this my default
              address
            </label>
          </form>
        </div>

        <div>
          <button
            className="cursor-pointer bg-[#2AAE77] font-semibold text-sm py-4 rounded-lg text-white w-full"
            onClick={() => setOverlayOpen(true)}
          >
            Save and Review
          </button>
          <p className="text-[#48464c] text-sm my-2">
            The more relevant and accurate your input, the better the platform
            can match you with the right service providers.
          </p>
        </div>
      </div>

      <CustomOverlay isOpen={overlayOpen} onClose={() => setOverlayOpen(false)}>
        <div className="relative w-full h-full">
          {/* Fixed Close Button */}
          <button
            onClick={() => setOverlayOpen(false)}
            className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-md hover:bg-white transition"
          >
            <CircleX className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Content */}
          <div className="w-[60%] mx-auto max-h-[90vh] overflow-y-auto pt-14 pb-6">
            <div className="bg-white border border-[#CFDBE8] p-4 mt-8 mb-0 rounded-2xl">
              <h1 className="font-bold text-xl leading-7 text-[#48464c]">
                Add Product/Service details
              </h1>

              <form className="my-4">
                <label className="text-[#48464c]">
                  Select category
                  <input
                    type="text"
                    className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                    placeholder="e.g., Electronics, Furniture"
                  />
                </label>

                <div className="flex items-center gap-2 my-6">
                  <label className="text-[#48464c] w-full">
                    Product Specification
                    <input
                      type="text"
                      className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                      placeholder="e.g., HP Pavilion 15, 8GB RAM, SSD"
                    />
                  </label>
                  <label className="text-[#48464c] w-full">
                    Quantity
                    <input
                      type="number"
                      className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                      placeholder="e.g., 10 units"
                    />
                  </label>
                </div>

                <div className="flex items-center gap-2 my-6">
                  <label className="text-[#48464c] w-full">
                    Min. Budget Range
                    <input
                      type="text"
                      className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                      placeholder="e.g., 50K"
                    />
                  </label>
                  <label className="text-[#48464c] w-full">
                    Max. Budget Range
                    <input
                      type="number"
                      className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                      placeholder="e.g., 80K"
                    />
                  </label>
                </div>

                <label className="text-[#48464c] w-full">
                  Additional Details
                  <textarea
                    rows={4}
                    placeholder="Purpose, delivery timeline, brand preferences…"
                    className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  ></textarea>
                </label>

                <div className="p-2 rounded-2xl w-fit flex items-center gap-2">
                  <input id="file-upload" type="file" className="hidden" />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center gap-2 px-5 py-2 bg-[#EEF0F6] text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition hover:bg-gray-200"
                  >
                    <FolderOpenDot className="h-6 w-6 text-gray-600" />
                    <span className="font-medium text-gray-700">
                      Attach file
                    </span>
                  </label>
                </div>
              </form>
            </div>

            <div className="bg-white border border-[#CFDBE8] p-4 my-4 rounded-2xl">
              <h1 className="font-bold text-xl leading-7 text-[#48464c]">
                Add Address
              </h1>

              <form className="my-4">
                <label className="text-[#48464c] w-full">
                  Address
                  <textarea
                    rows={4}
                    placeholder="House No., Street, Area"
                    className="bg-[#f5f5f5] block p-2 rounded-lg my-2 w-full"
                  ></textarea>
                </label>
                <label className="text-[#48464c]">
                  City
                  <input
                    type="text"
                    className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                    placeholder="e.g., Mumbai"
                  />
                </label>
                <label className="text-[#48464c]">
                  State
                  <input
                    type="text"
                    className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                    placeholder="e.g., Maharashtra"
                  />
                </label>

                <label className="text-[#48464c]">
                  Pincode
                  <input
                    type="number"
                    className="bg-[#f5f5f5] block w-full p-2 rounded-lg my-2"
                    placeholder="e.g., 400001"
                  />
                </label>
                <label className="text-[#48464c]">
                  <input className="mt-4" type="checkbox" /> Make this my default
                  address
                </label>
              </form>
            </div>

            <div>
              <button className="cursor-pointer bg-[#2AAE77] font-semibold text-sm py-4 rounded-lg text-white w-full">
                Post the Request
              </button>
            </div>
          </div>
        </div>
      </CustomOverlay>̦
    </>
  );
};

export default NewRequestForm;
