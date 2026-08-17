import React from 'react'

const ApplicationTable = () => {
  return (
    <div>
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
    </div>
  )
}

export default ApplicationTable
