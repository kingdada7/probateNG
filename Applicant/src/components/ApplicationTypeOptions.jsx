import { LayoutGrid, Check } from "lucide-react";

const ApplicationTypeOptions = ({
  applicationType,
  setApplicationType,
}) => {
  const GREEN = "#1a5c2a";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <LayoutGrid size={18} style={{ color: GREEN }} />
        <h2 className="text-lg font-bold text-gray-900">
          1. Select Application Type
        </h2>
      </div>

      <div className="space-y-4">
        {/* Grant of Probate */}
        <button
          type="button"
          onClick={() => setApplicationType("Grant of Probate")}
          className={`relative w-full rounded-xl border-2 p-5 text-left transition-all duration-200 ${
            applicationType === "Grant of Probate"
              ? "border-[#1a5c2a] bg-[#f0f7f2] shadow-md"
              : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
          }`}
        >
          {applicationType === "Grant of Probate" && (
            <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#1a5c2a] flex items-center justify-center">
              <Check size={16} className="text-white" strokeWidth={3} />
            </div>
          )}

          <h3 className="text-sm font-bold text-gray-900">
            Grant of Probate
          </h3>

          <p className="text-xs text-gray-500 mt-1 leading-5">
            Applied for when the deceased left a valid and properly executed
            Will.
          </p>
        </button>

        {/* Letters of Administration */}
        <button
          type="button"
          onClick={() =>
            setApplicationType("Letters of Administration")
          }
          className={`relative w-full rounded-xl border-2 p-5 text-left transition-all duration-200 ${
            applicationType === "Letters of Administration"
              ? "border-[#1a5c2a] bg-[#f0f7f2] shadow-md"
              : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
          }`}
        >
          {applicationType === "Letters of Administration" && (
            <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#1a5c2a] flex items-center justify-center">
              <Check size={16} className="text-white" strokeWidth={3} />
            </div>
          )}

          <h3 className="text-sm font-bold text-gray-900">
            Letters of Administration
          </h3>

          <p className="text-xs text-gray-500 mt-1 leading-5">
            Applied for when the deceased died intestate (without a Will).
          </p>
        </button>
      </div>
    </div>
  );
};

export default ApplicationTypeOptions;