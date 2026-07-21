import React from "react";

const DashboardTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900">
          Recent Application Activity
        </h2>
        <button
          style={{ color: GREEN }}
          className="text-sm font-semibold hover:underline"
        >
          View All
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Reference ID
              </th>
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Estate Name
              </th>
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Submission Date
              </th>
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Status
              </th>
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {applications.map((app, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap">
                  {app.refId}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800 whitespace-nowrap">
                  {app.estateName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {app.submissionDate}
                </td>
                <td className="px-6 py-4">{statusBadge(app.status)}</td>
                <td className="px-6 py-4">
                  <button
                    style={{ color: GREEN }}
                    className="text-sm font-bold hover:underline whitespace-nowrap"
                  >
                    {app.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden divide-y divide-gray-100">
        {applications.map((app, i) => (
          <div key={i} className="px-5 py-4 space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-gray-800">
                  {app.estateName}
                </div>
                <div className="font-mono text-[11px] text-gray-400 mt-0.5">
                  {app.refId}
                </div>
              </div>
              {statusBadge(app.status)}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {app.submissionDate}
              </span>
              <button
                style={{ color: GREEN }}
                className="text-sm font-bold hover:underline"
              >
                {app.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
