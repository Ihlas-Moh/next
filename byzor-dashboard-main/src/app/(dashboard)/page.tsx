import React from "react";
import PageHeader from "@/components/molecules/page-header";
import CardMaker from "@/components/molecules/card/card-maker";

export default function DashboardPage() {
  // Metrics definition
  const metrics = [
    {
      title: "Total Users",
      description: "The total number of users across platform",
      value: 260000,
    },
    {
      title: "Total Products",
      description: "The total number of products in my store",
      value: 4560000,
    },
    {
      title: "Total Stores",
      description: "The total number of stores across platform",
      value: 14520,
    },
    {
      title: "Platform Visits",
      description: "The total number of platform visits",
      value: "15,430",
    },
  ];

  return (
    <>
      <PageHeader breadCrumbs={[{ title: "Dashboard" }]} />
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="flex">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <CardMaker
              key={index}
              title={metric.title}
              description={metric.description}
              content={<div className="text-2xl font-bold">{metric.value}</div>}
            />
          ))}
        </div>
      </div>
    </>
  );
}
