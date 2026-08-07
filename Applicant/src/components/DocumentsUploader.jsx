import { FileText } from "lucide-react";
import React from "react";

const DocumentsUploader = ({ file, setFile }) => {
  return (
    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition cursor-pointer bg-gray-50">
      {file ? (
        <div className="flex flex-col items-center">
          {file.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-32 h-32 object-cover rounded-lg mb-3"
            />
          ) : (
            <FileText className="w-16 h-16 text-red-500 mb-3" />
          )}

          <p className="font-semibold text-gray-900 truncate max-w-[250px]">
            {file.name}
          </p>

          <p className="text-sm text-green-600 mt-1">Document selected</p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFile(null);
            }}
            className="mt-3 text-sm text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ) : (
        <>
          <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />

          <p className="font-bold text-gray-900 mb-1">Click or drag and drop</p>

          <p className="text-sm text-gray-600">PDF, JPG up to 5MB</p>
        </>
      )}

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default DocumentsUploader;
