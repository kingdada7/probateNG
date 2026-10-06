import React from "react";

const activities = [
  {
    title: "Document uploaded",
    application: "APP-2026-0142",
    time: "10 minutes ago",
  },
  {
    title: "Application reviewed",
    application: "APP-2026-0138",
    time: "1 hour ago",
  },
  {
    title: "Application assigned",
    application: "APP-2026-0135",
    time: "2 hours ago",
  },
  {
    title: "Comment added",
    application: "APP-2026-0129",
    time: "Yesterday",
  },
];

const RecentActivity = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-5 py-4">
        <h2 className="font-semibold text-gray-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Your latest activity in the registry
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div
            key={`${activity.application}-${activity.title}`}
            className="flex gap-3 px-5 py-4"
          >
            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#086b2f]" />

            <div>
              <p className="text-sm font-medium text-gray-800">
                {activity.title}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {activity.application}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;