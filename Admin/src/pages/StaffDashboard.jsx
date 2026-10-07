import React, { useEffect, useState } from "react";
import {
  ClipboardList,
  Clock3,
  FileWarning,
  CheckCircle2,
} from "lucide-react";
import StaffDashboardHeader from "../components/StaffDashboardHeader";
import PendingApplications from "../components/PendingApplications";
import ActionRequired from "../components/ActionRequired";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import StaffStatCard from "../components/StaffStatCard";
import { useAppContext } from "../context/AppContext";


const StaffDashboard = () => {

  const { axios } = useAppContext();

const [applications, setApplications] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchAssignedApplications = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        console.error("No admin token found");
        return;
      }

      const { data } = await axios.get(
        "/api/application/my-assigned",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.success) {
        setApplications(data.applications || []);
      }
    } catch (error) {
      console.error(
        "Error fetching assigned applications:",
        error.response?.data || error,
      );
    } finally {
      setLoading(false);
    }
  };

  fetchAssignedApplications();
}, [axios]);

const assignedCount = applications.length;

const pendingReviewCount = applications.filter(
  (app) => app.status === "Pending Review",
).length;

const completedCount = applications.filter(
  (app) => app.status === "Approved",
).length;

  const stats = [
    {
      title: "Assigned to Me",
      value: assignedCount,
      description: "+3 this week",
      icon: ClipboardList,
    },
    {
      title: "Pending Review",
      value: pendingReviewCount,
      description: "4 due today",
      icon: Clock3,
    },
    // {
    //   title: "Awaiting Documents",
    //   value: 5,
    //   description: "2 updated today",
    //   icon: FileWarning,
    // },
    {
      title: "Completed",
      value: completedCount,
      description: "+6 this week",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <StaffDashboardHeader />

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StaffStatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
          <PendingApplications />

          <ActionRequired />
        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
          <RecentActivity />

          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;