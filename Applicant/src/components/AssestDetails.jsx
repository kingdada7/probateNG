import { ChevronDown, Plus, TableProperties, Trash2 } from "lucide-react";
import React, { useState } from "react";

const AssestDetails = () => {
  const GREEN = "#1a5c2a";
  const CATEGORIES = [
    "Real Estate",
    "Bank Account",
    "Vehicle",
    "Stocks / Shares",
    "Business Interest",
    "Jewellery / Valuables",
    "Other",
  ];
  const inputCls =
    "border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a] transition bg-white w-full";
  const [assets, setAssets] = useState([
    {
      id: 1,
      category: "Bank Account",
      description: "",
      value: "",
    },
  ]);
  return (
    <div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <TableProperties size={18} style={{ color: GREEN }} />
            <h2 className="text-lg font-bold text-gray-900">
              3. Asset Details
            </h2>
          </div>
          <button
            // onClick={addAsset}
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-colors hover:opacity-80 shrink-0"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            <Plus size={15} strokeWidth={2.5} />
            Add New Asset
          </button>
        </div>

        {/* Table header */}
        <div className="hidden sm:grid grid-cols-[minmax(160px,1fr)_minmax(180px,2fr)_140px_40px] gap-0 border-b border-gray-200 pb-2.5 mb-1">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-2">
            Category
          </span>
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-2">
            Description / Particulars
          </span>
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-2 text-right">
            Value (₦)
          </span>
          <span />
        </div>

        {/* Desktop rows */}
        <div className="hidden sm:block divide-y divide-gray-100">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="grid grid-cols-[minmax(160px,1fr)_minmax(180px,2fr)_140px_40px] gap-0 items-center py-3"
            >
              {/* Category select */}
              <div className="relative px-2">
                <select
                  value={asset.category}
                  onChange={(e) =>
                    updateAsset(asset.id, "category", e.target.value)
                  }
                  className="appearance-none w-full border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-800 bg-white outline-none focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a] transition"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
              {/* Description */}
              <div className="px-2">
                <input
                  type="text"
                  value={asset.description}
                  onChange={(e) =>
                    updateAsset(asset.id, "description", e.target.value)
                  }
                  placeholder="e.g. Plot 442, Maitama District"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a] transition bg-white"
                />
              </div>
              {/* Value */}
              <div className="px-2">
                <input
                  type="text"
                  value={
                    asset.value ? Number(asset.value).toLocaleString() : ""
                  }
                  onChange={(e) =>
                    updateAsset(
                      asset.id,
                      "value",
                      e.target.value.replace(/,/g, ""),
                    )
                  }
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a] transition bg-white text-right"
                />
              </div>
              {/* Delete */}
              <div className="flex justify-center">
                <button
                  onClick={() => removeAsset(asset.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile rows */}
        <div className="sm:hidden space-y-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="border border-gray-200 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Category
                </span>
                <button
                  onClick={() => removeAsset(asset.id)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="relative">
                <select
                  value={asset.category}
                  onChange={(e) =>
                    updateAsset(asset.id, "category", e.target.value)
                  }
                  className={`appearance-none ${inputCls} pr-8`}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Description
                </div>
                <input
                  type="text"
                  value={asset.description}
                  onChange={(e) =>
                    updateAsset(asset.id, "description", e.target.value)
                  }
                  placeholder="e.g. Plot 442, Maitama District"
                  className={inputCls}
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Value (₦)
                </div>
                <input
                  type="text"
                  value={
                    asset.value ? Number(asset.value).toLocaleString() : ""
                  }
                  onChange={(e) =>
                    updateAsset(
                      asset.id,
                      "value",
                      e.target.value.replace(/,/g, ""),
                    )
                  }
                  placeholder="0"
                  className={inputCls}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssestDetails;
