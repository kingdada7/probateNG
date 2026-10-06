import React from "react";
import { ArrowRight } from "lucide-react";

const applications = [
  {
    id: "APP-2026-0142",
    applicant: "John Okafor",
    type: "Probate",
    status: "Pending Review",
    date: "Oct 6",
  },
  {
    id: "APP-2026-0138",
    applicant: "Mary James",
    type: "Letters of Administration",
    status: "Awaiting Documents",
    date: "Oct 6",
  },
  {
    id: "APP-2026-0135",
    applicant: "David Bello",
    type: "Probate",
    status: "Pending Review",
    date: "Oct 5",
  },
  {
    id: "APP-2026-0129",
    applicant: "Sarah Musa",
    type: "Letters of Administration",
    status: "Pending Review",
    date: "Oct 5",
  },
];

const statusStyles = {
  "Pending Review": "bg-yellow-50 text-yellow-700",
  "Awaiting Documents": "bg-orange-50 text-orange-700",
};

const PendingApplications = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <h2 className="font-semibold text-gray-900">
            My Pending Applications
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Applications requiring your attention
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-[#086b2f] hover:underline">
          View all
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-5 py-3 font-medium">Application</th>
              <th className="px-5 py-3 font-medium">Applicant</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {applications.map((application) => (
              <tr
                key={application.id}
                className="cursor-pointer transition hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                  {application.id}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {application.applicant}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {application.type}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      statusStyles[application.status]
                    }`}
                  >
                    {application.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {application.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-gray-100 md:hidden">
        {applications.map((application) => (
          <div
            key={application.id}
            className="p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {application.id}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  {application.applicant}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                  statusStyles[application.status]
                }`}
              >
                {application.status}
              </span>
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-500">
              <span>{application.type}</span>
              <span>{application.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PendingApplications;