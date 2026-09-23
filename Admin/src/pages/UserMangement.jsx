import React, { useState } from "react";
import {
  Download,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ApplicationTable from "../components/ApplicationTable";



const UserMangement = () => {

  return (
    <div className="min-h-screen bg-[#fbf9fa] px-[23px] py-[30px] font-sans text-[#25252a]">
      <div className="mx-auto w-full max-w-[1100px]">


          <ApplicationTable />

          {/* ================= PAGINATION ================= */}

          <div
            className="
              flex h-[52px] items-center
              justify-between bg-white px-3
            "
          >
            <div className="text-[11px] text-[#55565c]">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">6</span> of{" "}
              <span className="font-medium">128</span> entries
            </div>

            <div className="flex items-center gap-[2px]">
              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  text-[#55565b] hover:bg-[#f1f2f3]
                "
              >
                <ChevronLeft size={15} />
              </button>

              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  bg-[#172235] text-[10.5px]
                  text-white
                "
              >
                1
              </button>

              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  text-[10.5px] text-[#55565b]
                  hover:bg-[#f1f2f3]
                "
              >
                2
              </button>

              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  text-[10.5px] text-[#55565b]
                  hover:bg-[#f1f2f3]
                "
              >
                3
              </button>

              <span
                className="
                  flex h-[27px] w-[25px]
                  items-center justify-center
                  text-[10px] text-[#77787c]
                "
              >
                ...
              </span>

              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  text-[10.5px] text-[#55565b]
                  hover:bg-[#f1f2f3]
                "
              >
                22
              </button>

              <button
                className="
                  flex h-[27px] w-[27px]
                  items-center justify-center
                  text-[#55565b] hover:bg-[#f1f2f3]
                "
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default UserMangement;
