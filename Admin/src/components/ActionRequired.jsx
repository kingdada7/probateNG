import React from "react";
import { ArrowRight, AlertCircle, FileWarning, RotateCcw } from "lucide-react";

const actions = [
  {
    label: "Applications due for review",
    count: 4,
    icon: AlertCircle,
    style: "text-red-600 bg-red-50",
  },
  {
    label: "Missing documents",
    count: 2,
    icon: FileWarning,
    style: "text-yellow-600 bg-yellow-50",
  },
  {
    label: "Applications needing correction",
    count: 1,
    icon: RotateCcw,
    style: "text-orange-600 bg-orange-50",
  },
];

const ActionRequired = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-900">
            Action Required
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Items that need your attention
          </p>
        </div>

        <button className="text-[#086b2f]">
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="flex w-full items-center gap-3 rounded-lg border border-gray-100 p-3 text-left transition hover:bg-gray-50"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${action.style}`}
              >
                <Icon size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-700">
                  {action.label}
                </p>
              </div>

              <span className="text-lg font-bold text-gray-900">
                {action.count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ActionRequired;