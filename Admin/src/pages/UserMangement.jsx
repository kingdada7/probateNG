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

const applications = [
  {
    id: "PRB-2024-00128",
    applicant: "Tunde Ajayi",
    relationship: "Son / Next of Kin",
    deceased: "Late Segun Ajayi",
    type: "Letter of Admin",
    assigned: "B. Musa",
    initials: "BM",
    date: "Oct 24, 2024",
    status: "Under Review",
    statusClass: "bg-[#fff0c9] text-[#9b6915]",
  },
  {
    id: "PRB-2024-00127",
    applicant: "Amina Bello",
    relationship: "Spouse",
    deceased: "Late Kabir Bello",
    type: "Probate Grant (Will)",
    assigned: "E. Okafor",
    initials: "EO",
    date: "Oct 23, 2024",
    status: "Docs Required",
    statusClass: "bg-[#ffead1] text-[#a64e17]",
  },
  {
    id: "PRB-2024-00126",
    applicant: "Chukwudi Eze",
    relationship: "Legal Rep.",
    deceased: "Late Ngozi Eze",
    type: "Letter of Admin",
    assigned: "Unassigned",
    initials: "",
    date: "Oct 22, 2024",
    status: "Submitted",
    statusClass: "bg-[#e5eaff] text-[#4d65c1]",
  },
  {
    id: "PRB-2024-00125",
    applicant: "Sarah Williams",
    relationship: "Daughter",
    deceased: "Late John Williams",
    type: "Probate Grant (Will)",
    assigned: "B. Musa",
    initials: "BM",
    date: "Oct 21, 2024",
    status: "Awaiting Approval",
    statusClass: "bg-[#dceaff] text-[#4d76bd]",
  },
  {
    id: "PRB-2024-00124",
    applicant: "Fatai Olamilekan",
    relationship: "Brother",
    deceased: "Late Ade Olamilekan",
    type: "Letter of Admin",
    assigned: "A. Adebayo",
    initials: "AA",
    date: "Oct 20, 2024",
    status: "Approved",
    statusClass: "bg-[#d4f5e5] text-[#27855b]",
  },
  {
    id: "PRB-2024-00123",
    applicant: "Ibrahim Dauda",
    relationship: "Son",
    deceased: "Late Usman Dauda",
    type: "Probate Grant (Will)",
    assigned: "E. Okafor",
    initials: "EO",
    date: "Oct 19, 2024",
    status: "Rejected",
    statusClass: "bg-[#ffe0e0] text-[#c05252]",
  },
];

const UserMangement = () => {
  const [selected, setSelected] = useState(
    applications.map((app) =>
      ["PRB-2024-00128", "PRB-2024-00125", "PRB-2024-00124"].includes(app.id),
    ),
  );

  const selectedCount = selected.filter(Boolean).length;

  const toggleRow = (index) => {
    setSelected((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const toggleAll = () => {
    const allSelected = selected.every(Boolean);

    setSelected(applications.map(() => !allSelected));
  };

  return (
    <div className="min-h-screen bg-[#fbf9fa] px-[23px] py-[30px] font-sans text-[#25252a]">
      <div className="mx-auto w-full max-w-[1100px]">
        {/* ================= HEADER ================= */}

        <div className="mb-[23px] flex items-start justify-between">
          <div>
            <h1 className="mb-[7px] text-[25px] font-bold leading-[1.15] tracking-[-0.45px] text-[#252529]">
              Applications
            </h1>

            <p className="text-[13.5px] leading-[1.4] text-[#57575d]">
              Manage and monitor all probate applications.
            </p>
          </div>

          <div className="flex items-center gap-[9px] pt-[17px]">
            {/* Export */}
            <button
              className="
                flex h-[34px] items-center justify-center gap-2
                border border-[#d6d5d8] bg-white px-[14px]
                text-[12.5px] font-semibold text-[#33343a]
                transition hover:bg-[#f7f7f7]
              "
            >
              <Download size={15} strokeWidth={1.8} />
              Export
            </button>

            {/* New Application */}
            <button
              className="
                flex h-[34px] min-w-[145px] items-center
                justify-center gap-2 border border-[#172235]
                bg-[#172235] px-[14px] text-[12.5px]
                font-semibold text-white transition
                hover:bg-[#202d43]
              "
            >
              <Plus size={17} strokeWidth={2} />
              New Application
            </button>
          </div>
        </div>

        {/* ================= TABLE CARD ================= */}

        <div className="overflow-hidden border border-[#d8d7da] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          {/* ================= TOOLBAR ================= */}

          <div
            className="
              flex min-h-[54px] flex-wrap items-center gap-[9px]
              border-b border-[#d8d7da] px-3 py-[9px]
            "
          >
            {/* Filters */}
            <button
              className="
                flex h-[31px] items-center justify-center gap-[7px]
                border border-[#d8d7da] bg-white px-[10px]
                text-[12px] font-medium text-[#34353a]
              "
            >
              <SlidersHorizontal size={14} strokeWidth={1.8} />

              <span>Filters</span>

              <span
                className="
                  flex h-4 w-4 items-center justify-center
                  rounded-full bg-[#172235] text-[9px]
                  font-bold text-white
                "
              >
                2
              </span>
            </button>

            {/* Status */}
            <button
              className="
                flex h-[31px] min-w-[112px] items-center
                justify-between gap-2 border border-[#d8d7da]
                bg-white px-[10px] text-[12px] font-medium
                text-[#34353a]
              "
            >
              All Statuses
              <ChevronDown size={14} />
            </button>

            {/* Roles */}
            <button
              className="
                flex h-[31px] min-w-[108px] items-center
                justify-between gap-2 border border-[#d8d7da]
                bg-white px-[10px] text-[12px] font-medium
                text-[#34353a]
              "
            >
              All Roles
              <ChevronDown size={14} />
            </button>

            <span className="whitespace-nowrap text-[11.5px] text-[#77777d]">
              {selectedCount} selections
            </span>

            <button
              className="
                bg-transparent px-0 text-[11.5px]
                font-semibold text-[#34353a]
              "
            >
              Bulk Assign
            </button>

            {/* Search */}
            <div
              className="
                ml-auto flex h-[31px] w-[201px]
                items-center gap-[7px] border border-[#d2d1d5]
                bg-white px-[9px]
              "
            >
              <Search
                size={15}
                strokeWidth={1.8}
                className="shrink-0 text-[#85858a]"
              />

              <input
                type="text"
                placeholder="Search table..."
                className="
                  w-full border-none bg-transparent
                  text-[11.5px] text-[#333] outline-none
                  placeholder:text-[#85858b]
                "
              />
            </div>
          </div>

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
    </div>
  );
};

export default UserMangement;
