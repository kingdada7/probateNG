import {
  Lock,
  FileText,
  Upload,
  BarChart3,
  CheckSquare,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function DocumentsUploadForm() {
  const [deathCertificate, setDeathCertificate] = useState(null);
  const [affidavit, setAffidavit] = useState(null);
  const [willDocument, setWillDocument] = useState(null);
  const [otherSupporting, setOtherSupporting] = useState(null);
  const { axios, navigate } = useAppContext();

  const GREEN = "#1a5c2a";
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-10">
          <div className="mb-8 p-4 bg-green-50 border border-blue-200 rounded-lg">
            <div className="flex gap-3">
              <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-900">
                  Please upload the required legal documents in PDF or JPG
                  format. To ensure a smooth verification process, ensure all
                  text is clearly legible. Each document must not exceed{" "}
                  <span className="font-bold">5MB</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Death Certificate</h3>
                  <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">
                    REQUIRED
                  </span>
                </div>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer bg-gray-50">
                  <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">
                    Click or drag and drop
                  </p>
                  <p className="text-sm text-gray-600">PDF, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    // onChange={(e) =>
                    //   setDocuments((prev) => ({
                    //     ...prev,
                    //     deathCertificate: e.target.files?.[0] || null,
                    //   }))
                    // }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">
                    Affidavit of Kinship
                  </h3>
                  <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">
                    REQUIRED
                  </span>
                </div>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer bg-gray-50">
                  <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">
                    Click or drag and drop
                  </p>
                  <p className="text-sm text-gray-600">PDF, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    // onChange={(e) =>
                    //   setDocuments((prev) => ({
                    //     ...prev,
                    //     affidavitKinship: e.target.files?.[0] || null,
                    //   }))
                    // }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Will Documents</h3>
                  <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    OPTIONAL
                  </span>
                </div>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer bg-gray-50">
                  <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">
                    Click or drag and drop
                  </p>
                  <p className="text-sm text-gray-600">PDF, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    // onChange={(e) =>
                    //   setDocuments((prev) => ({
                    //     ...prev,
                    //     willDocument: e.target.files?.[0] || null,
                    //   }))
                    // }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">
                    Other supporting Document
                  </h3>
                  <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    OPTIONAL
                  </span>
                </div>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer bg-gray-50">
                  <FileText className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">
                    Click or drag and drop
                  </p>
                  <p className="text-sm text-gray-600">PDF, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    // onChange={(e) =>
                    //   setDocuments((prev) => ({
                    //     ...prev,
                    //     willDocument: e.target.files?.[0] || null,
                    //   }))
                    // }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* <div className="border-t border-gray-200 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  // checked={documentDeclaration}
                  // onChange={(e) => setDocumentDeclaration(e.target.checked)}
                  className="w-5 h-5 accent-[#16a34a] mt-0.5"
                />
                <div>
                  <p className="font-bold text-gray-900">
                    Legal Declaration & Verification
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    I hereby declare that all uploaded documents are true and
                    correct representations of the originals and agree to
                    present the physical copies to the Registrar of the FCT
                    Customary Court upon request.
                  </p>
                </div>
              </label>
            </div> */}
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-6 px-7 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: GREEN }}
            >
              Submit
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DocumentsUploadForm;
