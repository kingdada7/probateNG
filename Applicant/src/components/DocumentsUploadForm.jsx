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
import toast from "react-hot-toast";
import DocumentsUploader from "./DocumentsUploader";

function DocumentsUploadForm() {
  const [deathCertificate, setDeathCertificate] = useState(null);
  const [affidavit, setAffidavit] = useState(null);
  const [willDocument, setWillDocument] = useState(null);
  const [otherSupporting, setOtherSupporting] = useState(null);
  const { axios, navigate } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const applicationId = localStorage.getItem("applicationId");

      const formData = new FormData();

      if (deathCertificate) {
        formData.append("deathCertificate", deathCertificate);
      }

      if (affidavit) {
        formData.append("affidavit", affidavit);
      }

      if (willDocument) {
        formData.append("willDocument", willDocument);
      }

      if (otherSupporting) {
        formData.append("otherSupporting", otherSupporting);
      }

      const { data } = await axios.patch(
        `/api/application/${applicationId}/documents-upload`,
        formData,
      );

      if (data.success) {
        navigate("/citizenportal");

        toast.success(
          "Documents uploaded successfully and application submitted",
        );
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };
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

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Death Certificate</h3>
                  <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">
                    REQUIRED
                  </span>
                </div>
                <DocumentsUploader
                  file={deathCertificate}
                  setFile={setDeathCertificate}
                />
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
                <DocumentsUploader file={affidavit} setFile={setAffidavit} />
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
                <DocumentsUploader
                  file={willDocument}
                  setFile={setWillDocument}
                />
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
                <DocumentsUploader
                  file={otherSupporting}
                  setFile={setOtherSupporting}
                />
              </div>
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
          </form>
        </div>
      </main>
    </div>
  );
}

export default DocumentsUploadForm;
