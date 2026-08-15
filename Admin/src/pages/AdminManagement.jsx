import { ArrowLeftRight, Ban, Download, UserPlus } from "lucide-react";
import React from "react";
import PaginationButton from "../components/PaginationButton";
import AdminManagementTable from "../components/AdminManagementTable";

const AdminManagement = () => {
  return (
    <div>
      <section className="mt-8 overflow-hidden rounded-xl border border-[#e6ebe8] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
        {/* Section Header */}
        <div className="flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[19px] font-bold text-[#253047]">
              Administrative Personnel Overview
            </h2>

            <p className="mt-1 text-[14px] text-[#657995]">
              Manage access levels and review institutional staff status.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-[#d9e3de] px-5 text-[13px] font-semibold text-[#0a6631] transition hover:bg-[#f3f8f5]">
              <Download size={16} />
              Export Logs
            </button>

            <button className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#06672e] px-5 text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(0,100,45,0.18)] transition hover:bg-[#075c29]">
              <UserPlus size={17} />
              Add New Admin
            </button>
          </div>
        </div>

        <AdminManagementTable />

        {/* Pagination */}
        <div className="flex flex-col gap-4 bg-[#f8fafb] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[#657995]">
            Showing 1 to 3 of 24 Personnel Records
          </p>

          <div className="flex items-center gap-2">
            <PaginationButton>Previous</PaginationButton>
            <PaginationButton active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>Next</PaginationButton>
          </div>
        </div>
      </section>
    </div>
  );
};

<PaginationButton />;

export default AdminManagement;
