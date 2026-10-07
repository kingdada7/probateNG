import React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ApplicationTable from "../components/ApplicationTable";

const UserMangement = () => {
  return (
    <div className="min-h-screen bg-[#fbf9fa] px-3 py-5 font-sans text-[#25252a] sm:px-5 sm:py-6 lg:px-6 lg:py-8">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* ================= APPLICATION TABLE ================= */}
        <div className="w-full overflow-hidden rounded-md bg-white shadow-sm">
          <ApplicationTable />
        </div>

        {/* ================= PAGINATION ================= */}
        <div
          className="
            flex flex-col gap-4
            bg-white px-4 py-4
            sm:h-[52px] sm:flex-row sm:items-center
            sm:justify-between sm:gap-0
          "
        >
          {/* Entries */}
          <div className="text-[11px] text-[#55565c]">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">6</span> of{" "}
            <span className="font-medium">128</span> entries
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between sm:justify-end">
            <div className="flex items-center gap-[2px]">

              {/* Previous */}
              <button
                type="button"
                aria-label="Previous page"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm text-[#55565b]
                  transition hover:bg-[#f1f2f3]
                  disabled:cursor-not-allowed disabled:opacity-40
                  sm:h-[27px] sm:w-[27px]
                "
              >
                <ChevronLeft size={15} />
              </button>

              {/* Page 1 */}
              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm bg-[#172235]
                  text-[10.5px] text-white
                  sm:h-[27px] sm:w-[27px]
                "
              >
                1
              </button>

              {/* Page 2 */}
              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm text-[10.5px]
                  text-[#55565b]
                  transition hover:bg-[#f1f2f3]
                  sm:h-[27px] sm:w-[27px]
                "
              >
                2
              </button>

              {/* Page 3 */}
              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm text-[10.5px]
                  text-[#55565b]
                  transition hover:bg-[#f1f2f3]
                  sm:h-[27px] sm:w-[27px]
                "
              >
                3
              </button>

              {/* Ellipsis */}
              <span
                className="
                  flex h-8 w-6 items-center justify-center
                  text-[10px] text-[#77787c]
                  sm:h-[27px]
                "
              >
                ...
              </span>

              {/* Last Page */}
              <button
                type="button"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm text-[10.5px]
                  text-[#55565b]
                  transition hover:bg-[#f1f2f3]
                  sm:h-[27px] sm:w-[27px]
                "
              >
                22
              </button>

              {/* Next */}
              <button
                type="button"
                aria-label="Next page"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-sm text-[#55565b]
                  transition hover:bg-[#f1f2f3]
                  sm:h-[27px] sm:w-[27px]
                "
              >
                <ChevronRight size={15} />
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserMangement;