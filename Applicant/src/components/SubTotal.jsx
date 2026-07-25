import React, { useState } from "react";

const SubTotal = () => {
  const GREEN = "#1a5c2a";

  const [assets, setAssets] = useState([
    {
      id: 1,
      category: "Real Estate",
      description: "e.g. Plot 442, Maitama District",
      value: "50000000",
    },
    {
      id: 2,
      category: "Bank Account",
      description: "First Bank -203XXXX441",
      value: "12500000",
    },
  ]);

  const subtotal = assets.reduce(
    (sum, a) => sum + (parseFloat(a.value) || 0),
    0
  );

  function formatNum(val) {
    const n = parseFloat(val.replace(/,/g, ""));
    if (isNaN(n)) return "0.00";

    return n.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs italic" style={{ color: GREEN }}>
          Ensure all assets are listed for accurate legal processing.
        </p>

        <div className="text-sm font-bold text-gray-900 whitespace-nowrap">
          Subtotal:
          <span style={{ color: GREEN }}>
            {" "}₦ {formatNum(String(subtotal))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;