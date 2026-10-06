import React from "react";
import {
  ClipboardList,
  Search,
  FileText,
} from "lucide-react";

const actions = [
  {
    label: "View Applications",
    icon: FileText,
  },
  {
    label: "Assigned to Me",
    icon: ClipboardList,
  },
  {
    label: "Search Application",
    icon: Search,
  },
];

const QuickActions = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="font-semibold text-gray-900">
        Quick Actions
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        Quickly access your common tasks
      </p>

      <div className="mt-5 space-y-2">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:border-[#086b2f] hover:bg-[#f4f9f6] hover:text-[#086b2f]"
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;