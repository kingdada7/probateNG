import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppContext } from "../context/AppContext";
import {
  ArrowLeft,
  FileText,
  User,
  UserRound,
  Briefcase,
  Users,
  Building2,
  Landmark,
  ShieldCheck,
  FolderOpen,
  Loader2,
  Check,
  X,
} from "lucide-react";
import ReviewButton from "./ReviewButton";

const ApplicationDetails = () => {
  const { applicationId } = useParams();
  const { axios } = useAppContext();
  const navigate = useNavigate();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getApplication = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(`/api/application/${applicationId}`);

        if (data.success) {
          setApplication(data.application);
        } else {
          setError(data.message || "Failed to load application");
        }
      } catch (error) {
        console.error(
          "Failed to fetch application:",
          error.response?.data || error,
        );

        setError(error.response?.data?.message || "Failed to load application");
      } finally {
        setLoading(false);
      }
    };

    if (applicationId) {
      getApplication();
    }
  }, [applicationId, axios]);

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex items-center gap-3 text-gray-600">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading application...</span>
        </div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center px-4">
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-center">
          <h2 className="text-lg font-semibold text-red-700">
            Unable to load application
          </h2>

          <p className="mt-1 text-sm text-red-600">
            {error || "Application not found"}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const applicant = application.applicant;
  const deceased = application.deceased;
  const applicationType = application.applicationType;
  const documents = application.documentUpload;

  const formatDate = (date) => {
    if (!date) return "Not provided";

    return new Date(date).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatCurrency = (value) => {
    if (value === undefined || value === null || value === "") {
      return "₦0";
    }

    return `₦${Number(value).toLocaleString("en-NG")}`;
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      case "Pending Review":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Applications
        </button>

        {/* Application Header */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900">
                  <FileText className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Probate Application</p>

                  <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Application Details
                  </h1>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-1 text-sm text-gray-500 sm:flex-row sm:gap-4">
                <span>
                  Application ID:{" "}
                  <span className="font-medium text-gray-700">
                    {application._id}
                  </span>
                </span>

                <span className="hidden sm:block">•</span>

                <span>
                  Submitted:{" "}
                  <span className="font-medium text-gray-700">
                    {formatDate(application.createdAt)}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${getStatusStyle(
                  application.status,
                )}`}
              >
                {application.status || "Draft"}
              </span>
            </div>
          </div>
        </div>

        {/* Applicant Information */}
        <SectionCard
          icon={<User className="h-5 w-5" />}
          title="Applicant Information"
        >
          <InfoGrid>
            <InfoItem label="Full Name" value={applicant?.applicantFullName} />

            <InfoItem label="Email" value={applicant?.applicantEmail} />

            <InfoItem
              label="Phone Number"
              value={applicant?.applicantPhoneNumber}
            />

            <InfoItem
              label="Occupation"
              value={applicant?.applicantOccupation}
            />

            <InfoItem
              label="Relationship to Deceased"
              value={applicant?.relationshipToDeceased}
            />

            <InfoItem
              label="Identification Type"
              value={applicant?.identificationType}
            />

            <InfoItem
              label="Identification Number"
              value={applicant?.identificationNumber}
            />

            <InfoItem
              label="Address"
              value={applicant?.applicantAddress}
              fullWidth
            />
          </InfoGrid>
        </SectionCard>

        {/* Deceased Information */}
        <SectionCard
          icon={<UserRound className="h-5 w-5" />}
          title="Deceased Information"
        >
          <div className="space-y-8">
            {/* Basic Information */}
            <SubSection title="Basic Information">
              <InfoGrid>
                <InfoItem label="Full Name" value={deceased?.deceasedName} />

                <InfoItem
                  label="Date of Death"
                  value={formatDate(deceased?.dateOfDeath)}
                />

                <InfoItem
                  label="Place of Death"
                  value={deceased?.placeOfDeath}
                />

                <InfoItem
                  label="Last Address"
                  value={deceased?.lastAddress}
                  fullWidth
                />

                <InfoItem
                  label="Occupation / Place of Work"
                  value={deceased?.occupationAndPlaceOfWork}
                  fullWidth
                />
              </InfoGrid>
            </SubSection>

            {/* Marriage */}
            <SubSection title="Marriage Information">
              <InfoGrid>
                <InfoItem
                  label="Date of Marriage"
                  value={formatDate(deceased?.dateOfMarriage)}
                />

                <InfoItem label="Spouse Name" value={deceased?.spouseName} />

                <InfoItem
                  label="Form of Marriage"
                  value={deceased?.formOfMarriage}
                />
              </InfoGrid>
            </SubSection>

            {/* Identification */}
            <SubSection title="Identification">
              <InfoGrid>
                <InfoItem
                  label="Identification Type"
                  value={deceased?.identificationType}
                />

                <InfoItem
                  label="Identification Number"
                  value={deceased?.identificationNumber}
                />
              </InfoGrid>
            </SubSection>

            {/* Next of Kin */}
            <SubSection title="Next of Kin">
              <InfoGrid>
                <InfoItem label="Name" value={deceased?.nextOfKin?.name} />

                <InfoItem
                  label="Relationship"
                  value={deceased?.nextOfKin?.relationship}
                />

                <InfoItem label="Phone" value={deceased?.nextOfKin?.phone} />

                <InfoItem
                  label="Address"
                  value={deceased?.nextOfKin?.address}
                  fullWidth
                />
              </InfoGrid>
            </SubSection>

            {/* Children */}
            <SubSection title="Children">
              {deceased?.children?.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Name
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Age
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Mother Name
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Mother Phone
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {deceased.children.map((child, index) => (
                        <tr key={child._id || index}>
                          <td className="px-4 py-3 text-gray-900">
                            {child.name || "Not provided"}
                          </td>

                          <td className="px-4 py-3 text-gray-600">
                            {child.age ?? "Not provided"}
                          </td>

                          <td className="px-4 py-3 text-gray-600">
                            {child.motherName || "Not provided"}
                          </td>

                          <td className="px-4 py-3 text-gray-600">
                            {child.motherPhone || "Not provided"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <EmptyState message="No children information provided." />
              )}
            </SubSection>

            {/* Minor Children */}
            <SubSection title="Minor Children">
              <InfoGrid>
                <InfoItem
                  label="Names and Ages"
                  value={deceased?.nameAndAgeOfMinorChildren}
                  fullWidth
                />

                <InfoItem
                  label="Guardian Information"
                  value={deceased?.nameAndAddressOfGuardianOfMinorChildren}
                  fullWidth
                />
              </InfoGrid>
            </SubSection>

            {/* Family */}
            <SubSection title="Family Information">
              <FamilyList title="Father" items={deceased?.family?.father} />

              <FamilyList title="Mother" items={deceased?.family?.mother} />

              <FamilyList title="Brothers" items={deceased?.family?.brothers} />

              <FamilyList title="Sisters" items={deceased?.family?.sisters} />
            </SubSection>
          </div>
        </SectionCard>

        {/* Application Type & Estate */}
        <SectionCard
          icon={<Briefcase className="h-5 w-5" />}
          title="Application & Estate Information"
        >
          <InfoGrid>
            <InfoItem
              label="Application Type"
              value={applicationType?.applicationType}
            />

            <InfoItem
              label="Estate Value"
              value={formatCurrency(applicationType?.estate)}
            />

            <InfoItem
              label="Sub Total"
              value={formatCurrency(applicationType?.subTotal)}
            />
          </InfoGrid>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Assets</h3>

            {applicationType?.assetDetails?.length > 0 ? (
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Category
                      </th>

                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Description
                      </th>

                      <th className="px-4 py-3 font-semibold text-gray-700">
                        Value
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {applicationType.assetDetails.map((asset, index) => (
                      <tr key={asset._id || index}>
                        <td className="px-4 py-3 text-gray-900">
                          {asset.category || "Not provided"}
                        </td>

                        <td className="px-4 py-3 text-gray-600">
                          {asset.description || "Not provided"}
                        </td>

                        <td className="px-4 py-3 font-medium text-gray-900">
                          {formatCurrency(asset.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState message="No assets provided." />
            )}
          </div>
        </SectionCard>

        {/* Financial Information */}
        <SectionCard
          icon={<Landmark className="h-5 w-5" />}
          title="Financial & Property Information"
        >
          <div className="space-y-8">
            {/* Bank Accounts */}
            <SubSection title="Bank Accounts">
              {deceased?.bankAccounts?.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Bank Name
                        </th>

                        <th className="px-4 py-3 font-semibold text-gray-700">
                          Account Number
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {deceased.bankAccounts.map((account, index) => (
                        <tr key={account._id || index}>
                          <td className="px-4 py-3 text-gray-900">
                            {account.bankName || "Not provided"}
                          </td>

                          <td className="px-4 py-3 text-gray-600">
                            {account.accountNumber || "Not provided"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <EmptyState message="No bank account information provided." />
              )}
            </SubSection>

            <SubSection title="Other Assets & Interests">
              <InfoGrid>
                <InfoItem
                  label="Personal Chattel"
                  value={deceased?.personalChattel}
                />

                <InfoItem
                  label="Insurance Policy"
                  value={deceased?.insurancePolicy}
                />

                <InfoItem
                  label="Company Share"
                  value={deceased?.companyShare}
                />

                <InfoItem
                  label="Pension Manager"
                  value={deceased?.pensionManger}
                />

                <InfoItem
                  label="Pension Account Number"
                  value={deceased?.pensionAccountNumber}
                />

                <InfoItem
                  label="Landed Property"
                  value={deceased?.landedProperty}
                />

                <InfoItem
                  label="Address of Property"
                  value={deceased?.addressOfProperty}
                  fullWidth
                />

                <InfoItem label="Rent" value={deceased?.rent} />

                <InfoItem
                  label="Name of Tenant"
                  value={deceased?.nameOfTenant}
                />
              </InfoGrid>
            </SubSection>
          </div>
        </SectionCard>

        {/* Sureties */}
        <SectionCard
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Sureties"
        >
          {deceased?.sureties?.length > 0 ? (
            <div className="space-y-6">
              {deceased.sureties.map((surety, index) => (
                <div
                  key={surety._id || index}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="mb-4 font-semibold text-gray-900">
                    Surety {index + 1}
                  </h3>

                  <InfoGrid>
                    <InfoItem label="Name" value={surety.name} />

                    <InfoItem label="Phone" value={surety.phone} />

                    <InfoItem label="Occupation" value={surety.occupation} />

                    <InfoItem label="Bank Details" value={surety.bankDetails} />

                    <InfoItem
                      label="Property Value"
                      value={surety.propertyValue}
                    />

                    <InfoItem
                      label="Income Per Annum"
                      value={surety.incomePerAnnum}
                    />

                    <InfoItem
                      label="Address"
                      value={surety.address}
                      fullWidth
                    />
                  </InfoGrid>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="No surety information provided." />
          )}
        </SectionCard>

        {/* Documents */}
        <SectionCard
          icon={<FolderOpen className="h-5 w-5" />}
          title="Uploaded Documents"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <DocumentItem
              name="Death Certificate"
              url={documents?.deathCertificate}
            />

            <DocumentItem name="Will Document" url={documents?.willDocument} />

            <DocumentItem name="Affidavit" url={documents?.affidavit} />

            <DocumentItem
              name="Other Supporting Documents"
              url={documents?.otherSupporting}
            />
          </div>
        </SectionCard>

        {/* Application Status */}
        <SectionCard
          icon={<FileText className="h-5 w-5" />}
          title="Application Status"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InfoItem label="Current Status" value={application.status} />

            <InfoItem label="Current Step" value={application.currentStep} />

            <InfoItem
              label="Created"
              value={formatDate(application.createdAt)}
            />

            <InfoItem
              label="Last Updated"
              value={formatDate(application.updatedAt)}
            />
          </div>
        </SectionCard>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Application Review
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Review all submitted information and documents before making a
              decision.
            </p>
          </div>

          <ReviewButton
            applicationId={applicationId}
            application={application}
            setApplication={setApplication}
          />
        </div>
      </div>
    </div>
  );
};

/* =========================
   Reusable Components
========================= */

const SectionCard = ({ icon, title, children }) => {
  return (
    <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
          {icon}
        </div>

        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>

      {children}
    </section>
  );
};

const SubSection = ({ title, children }) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>

      {children}
    </div>
  );
};

const InfoGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

const InfoItem = ({ label, value, fullWidth = false }) => {
  return (
    <div className={fullWidth ? "sm:col-span-2 lg:col-span-3" : ""}>
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="break-words text-sm font-medium text-gray-900">
        {value !== undefined && value !== null && String(value).trim() !== ""
          ? value
          : "Not provided"}
      </p>
    </div>
  );
};

const EmptyState = ({ message }) => {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
      {message}
    </div>
  );
};

const FamilyList = ({ title, items = [] }) => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 p-4">
      <h4 className="mb-3 font-semibold text-gray-900">{title}</h4>

      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((person, index) => (
            <div
              key={person._id || index}
              className="grid grid-cols-1 gap-2 rounded-lg bg-gray-50 p-3 sm:grid-cols-2"
            >
              <InfoItem label="Name" value={person.name} />

              <InfoItem label="Address" value={person.address} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No information provided.</p>
      )}
    </div>
  );
};

const DocumentItem = ({ name, url }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
          <FileText className="h-5 w-5 text-gray-600" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">{name}</p>

          <p className="text-xs text-gray-500">
            {url ? "Document uploaded" : "Not uploaded"}
          </p>
        </div>
      </div>

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
        >
          View
        </a>
      ) : (
        <span className="shrink-0 text-xs text-gray-400">N/A</span>
      )}
    </div>
  );
};

export default ApplicationDetails;
