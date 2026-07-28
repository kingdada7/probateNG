import { Lock, FileText, Upload, BarChart3, CheckSquare } from "lucide-react";
import { useState } from "react";

function DocumentsUpload() {
 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto w-full py-12 px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-black text-gray-900">
                Step 4:Upload Supporting Documents
              </h1>
            </div>
          </div>

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
            <div className="grid grid-cols-2 gap-8">
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
                  <Upload className="w-12 h-12 text-green-500 mx-auto mb-3" />
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

            <div className="grid grid-cols-2 gap-8">
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

            <div className="border-t border-gray-200 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  // checked={documentDeclaration}
                  // onChange={(e) => setDocumentDeclaration(e.target.checked)}
                  className="w-5 h-5 accent-blue-600 mt-0.5"
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
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button className="flex items-center gap-2 text-green-600 font-bold text-sm hover:text-blue-700">
                <span>←</span>
                Back to Step 3
              </button>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 text-gray-700 font-bold border border-green-600 rounded-lg hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="px-6 py-3 bg-green-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center gap-2">
                  Submit Application
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600 space-y-1">
          <div className="flex items-center justify-center gap-6">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Secure SSL Encrypted
            </span>
            <span className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Authorized Portal
            </span>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-8 py-6 text-center text-xs text-gray-600">
          <p>
            © 2024 Federal Capital Territory Customary Court of Nigeria. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DocumentsUpload;