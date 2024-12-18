import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card"
import { CustomChart } from "@/components/molecules/custom-chart/custom-chart"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/atoms/table"
import PageHeader from "@/components/molecules/page-header"

const revenueData = [
    { name: "Jan", value: 5000 },
    { name: "Feb", value: 6200 },
    { name: "Mar", value: 7800 },
    { name: "Apr", value: 8500 },
    { name: "May", value: 9200 },
    { name: "Jun", value: 10000 },
]

const subscriptionPlans = [
    { name: "Basic", users: 500 },
    { name: "Pro", users: 300 },
    { name: "Enterprise", users: 50 },
]

const topSellers = [
    { name: "Tech Haven", revenue: 15000 },
    { name: "Fashion Frenzy", revenue: 12000 },
    { name: "Gourmet Delights", revenue: 9000 },
    { name: "Hobby Corner", revenue: 7500 },
    { name: "Pet Paradise", revenue: 6000 },
]

export default function Revenue() {
    return (
        <>
            <PageHeader
                breadCrumbs={[
                    { title: "Dashboard", link: "/" },
                    { title: "Revenue", link: "/revenue" },
                ]}
            />
            <div className="space-y-6 mb-2">
                <div>
                    <h1 className="text-2xl font-bold">Revenue and Monetization</h1>
                    <p className="text-muted-foreground">Manage your account settings and preferences.</p>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <CustomChart
                    title="Monthly Revenue"
                    data={revenueData}
                    xKey="name"
                    yKeys={["value"]}
                    colors={["#10b981"]}
                    type="line"
                />
                <CustomChart
                    title="Subscription Plans"
                    data={subscriptionPlans}
                    xKey="name"
                    yKeys={["users"]}
                    colors={["#3b82f6"]}
                    type="bar"
                />
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Top Performing Sellers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Seller Name</TableHead>
                                    <TableHead>Revenue</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topSellers.map((seller) => (
                                    <TableRow key={seller.name}>
                                        <TableCell>{seller.name}</TableCell>
                                        <TableCell>${seller.revenue.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

