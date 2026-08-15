const PaginationButton = ({ children, active }) => {
  return (
    <button
      className={`flex h-[32px] min-w-[34px] items-center justify-center rounded-md border px-3 text-[12px] font-semibold ${
        active
          ? "border-[#086b2f] bg-[#086b2f] text-white"
          : "border-[#dce4e1] bg-white text-[#4e6079] hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
