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

          {/* ================= TABLE ================= */}

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[850px] table-fixed border-collapse">
              <thead>
                <tr className="bg-[#faf9fa]">
                  <th className="w-[38px] border-b border-[#d0cfd2] px-[10px] py-0 text-center">
                    <input
                      type="checkbox"
                      checked={selected.every(Boolean)}
                      onChange={toggleAll}
                      className="
                        h-[14px] w-[14px] cursor-pointer
                        appearance-none rounded-[2px]
                        border border-[#d3d4d7]
                        checked:border-[#273345]
                        checked:bg-[#273345]
                      "
                    />
                  </th>

                  <th className="w-[94px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    App ID
                  </th>

                  <th className="w-[108px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Applicant
                  </th>

                  <th className="w-[108px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Deceased
                  </th>

                  <th className="w-[113px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Type
                  </th>

                  <th className="w-[105px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Assigned To
                  </th>

                  <th className="w-[76px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Date
                  </th>

                  <th className="w-[103px] border-b border-[#d0cfd2] px-[10px] text-left text-[11.5px] font-semibold text-[#45464c]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application, index) => (
                  <tr
                    key={application.id}
                    className="
                      h-[66px] border-b border-[#dedde0]
                      odd:bg-white even:bg-[#f3f6f8]
                      hover:bg-[#eef2f5]
                    "
                  >
                    {/* Checkbox */}
                    <td className="px-[10px] text-center">
                      <input
                        type="checkbox"
                        checked={selected[index]}
                        onChange={() => toggleRow(index)}
                        className="
                          h-[14px] w-[14px] cursor-pointer
                          appearance-none rounded-[2px]
                          border border-[#d3d4d7]
                          checked:border-[#273345]
                          checked:bg-[#273345]
                        "
                      />
                    </td>

                    {/* App ID */}
                    <td
                      className="
                        px-[10px] text-[11px] font-bold
                        leading-[1.05] tracking-[0.1px]
                        text-[#30333a]
                      "
                    >
                      <span className="block">PRB-2024-</span>
                      <span>{application.id.split("-").pop()}</span>
                    </td>

                    {/* Applicant */}
                    <td className="px-[10px]">
                      <div className="flex flex-col gap-[3px]">
                        <strong
                          className="
                            text-[11.5px] font-bold
                            leading-[1.08] text-[#35363b]
                          "
                        >
                          {application.applicant}
                        </strong>

                        <small className="text-[9.5px] text-[#686970]">
                          {application.relationship}
                        </small>
                      </div>
                    </td>

                    {/* Deceased */}
                    <td
                      className="
                        px-[10px] text-[11.5px]
                        leading-[1.15] text-[#35363b]
                      "
                    >
                      {application.deceased}
                    </td>

                    {/* Type */}
                    <td
                      className="
                        px-[10px] text-[11.5px]
                        leading-[1.15] text-[#35363b]
                      "
                    >
                      {application.type}
                    </td>

                    {/* Assigned */}
                    <td className="px-[10px]">
                      {application.assigned === "Unassigned" ? (
                        <span
                          className="
                            text-[10px] italic
                            text-[#b9b9bd]
                          "
                        >
                          Unassigned
                        </span>
                      ) : (
                        <div className="flex items-center gap-[7px]">
                          <span
                            className="
                              flex h-[21px] w-[21px]
                              shrink-0 items-center
                              justify-center rounded-full
                              bg-[#e7eaeb] text-[7.5px]
                              font-semibold text-[#707278]
                            "
                          >
                            {application.initials}
                          </span>

                          <span className="text-[11px] text-[#35363b]">
                            {application.assigned}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Date */}
                    <td
                      className="
                        whitespace-pre-line px-[10px]
                        text-[11px] leading-[1.15]
                        text-[#57585e]
                      "
                    >
                      {application.date}
                    </td>

                    {/* Status */}
                    <td className="px-[10px]">
                      <span
                        className={`
                          inline-flex min-h-[22px]
                          items-center rounded-[9px]
                          px-[9px] py-[3px]
                          text-[9.5px] font-medium
                          leading-[1.05] whitespace-nowrap
                          ${application.statusClass}
                        `}
                      >
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
