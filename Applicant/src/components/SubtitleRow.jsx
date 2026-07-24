import React from "react";

const SubtitleRow = () => {
  return (
    <div>
      {/* Subtotal row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs italic" style={{ color: GREEN }}>
          Ensure all assets are listed for accurate legal processing.
        </p>
        <div className="text-sm font-bold text-gray-900 whitespace-nowrap">
          Subtotal:{" "}
          <span style={{ color: GREEN }}>₦ {formatNum(String(subtotal))}</span>
        </div>
      </div>
    </div>
  );
};

export default SubtitleRow;
