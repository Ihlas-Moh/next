import { CustomChart } from "@/components/molecules/custom-chart/custom-chart"
import PageHeader from "@/components/molecules/page-header"

const trafficData = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 1200 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 1500 },
  { name: "May", value: 1800 },
  { name: "Jun", value: 2000 },
]

const sellerPerformanceData = [
  { name: "Tech Haven", sales: 1200, traffic: 5000 },
  { name: "Fashion Frenzy", sales: 1500, traffic: 6000 },
  { name: "Gourmet Delights", sales: 800, traffic: 3000 },
  { name: "Hobby Corner", sales: 1000, traffic: 4000 },
  { name: "Pet Paradise", sales: 600, traffic: 2500 },
]

const userActivityData = [
  { name: "Mon", active: 500, new: 50 },
  { name: "Tue", active: 600, new: 40 },
  { name: "Wed", active: 550, new: 60 },
  { name: "Thu", active: 700, new: 45 },
  { name: "Fri", active: 800, new: 70 },
  { name: "Sat", active: 900, new: 90 },
  { name: "Sun", active: 750, new: 80 },
]

export default function Analytics() {
  return (
    <>
      <PageHeader
        breadCrumbs={[
          { title: "Dashboard", link: "/" },
          { title: "Analytics", link: "/analytics" },
        ]}
      />
      <div className="space-y-6 mb-2">
        <div>
          <h1 className="text-2xl font-bold">Analytics and Reports</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CustomChart
          title="Platform Traffic"
          data={trafficData}
          xKey="name"
          yKeys={["value"]}
          colors={["#3b82f6"]}
          type="line"
        />
        <CustomChart
          title="Seller Performance"
          data={sellerPerformanceData}
          xKey="name"
          yKeys={["sales", "traffic"]}
          colors={["#3b82f6", "#10b981"]}
          type="bar"
        />
        <CustomChart
          title="User Activity Trends"
          data={userActivityData}
          xKey="name"
          yKeys={["active", "new"]}
          colors={["#3b82f6", "#10b981"]}
          type="line"
        />
      </div>
    </>
  )
}

