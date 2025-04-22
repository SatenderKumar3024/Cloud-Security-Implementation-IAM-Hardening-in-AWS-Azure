"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, LineChart, PieChart } from "recharts"
import { Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { Shield, AlertTriangle, CheckCircle, Clock, Activity } from "lucide-react"

// Sample data for the charts
const vulnerabilityData = [
  { name: "Identity", before: 85, after: 35 },
  { name: "Access Control", before: 92, after: 42 },
  { name: "Authentication", before: 78, after: 30 },
  { name: "Authorization", before: 88, after: 38 },
  { name: "Privilege Escalation", before: 95, after: 45 },
]

const bucketAccessData = [
  { name: "Bucket 1", authorized: 120, unauthorized: 5 },
  { name: "Bucket 2", authorized: 98, unauthorized: 2 },
  { name: "Bucket 3", authorized: 86, unauthorized: 0 },
  { name: "Bucket 4", authorized: 99, unauthorized: 3 },
  { name: "Bucket 5", authorized: 85, unauthorized: 1 },
]

const complianceData = [
  { name: "Compliant", value: 85 },
  { name: "Non-Compliant", value: 10 },
  { name: "In Progress", value: 5 },
]

const COLORS = ["#00cc88", "#ff4444", "#f5a623"]

const logEntries = [
  {
    time: "10:45:23",
    user: "admin@example.com",
    action: "Policy Update",
    resource: "S3 Bucket: data-archive",
    status: "Success",
  },
  {
    time: "10:32:17",
    user: "service-account@example.com",
    action: "Read Access",
    resource: "VM: app-server-01",
    status: "Success",
  },
  {
    time: "10:28:05",
    user: "john.doe@example.com",
    action: "Write Access",
    resource: "S3 Bucket: user-uploads",
    status: "Denied",
  },
  {
    time: "10:15:42",
    user: "system@example.com",
    action: "Configuration Change",
    resource: "IAM Role: ReadOnlyAccess",
    status: "Success",
  },
  {
    time: "10:02:19",
    user: "jane.smith@example.com",
    action: "Delete Operation",
    resource: "Azure Blob: backup-2023",
    status: "Denied",
  },
]

export function Dashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="dashboard" className="py-20 bg-background/50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Security Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time visualization of security metrics and IAM implementation results.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="vulnerabilities" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="vulnerabilities" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Vulnerabilities</span>
              </TabsTrigger>
              <TabsTrigger value="access" className="gap-2">
                <Shield className="w-4 h-4" />
                <span>Access Control</span>
              </TabsTrigger>
              <TabsTrigger value="compliance" className="gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Compliance</span>
              </TabsTrigger>
              <TabsTrigger value="logs" className="gap-2">
                <Activity className="w-4 h-4" />
                <span>Audit Logs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vulnerabilities">
              <Card>
                <CardHeader>
                  <CardTitle>Vulnerability Reduction</CardTitle>
                  <CardDescription>
                    Comparison of vulnerabilities before and after IAM hardening implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        before: {
                          label: "Before Implementation",
                          color: "hsl(var(--chart-1))",
                        },
                        after: {
                          label: "After Implementation",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={vulnerabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="before" fill="var(--color-before)" name="Before Implementation" />
                          <Bar dataKey="after" fill="var(--color-after)" name="After Implementation" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="access">
              <Card>
                <CardHeader>
                  <CardTitle>S3 Bucket & VM Access Control</CardTitle>
                  <CardDescription>Authorized vs. unauthorized access attempts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        authorized: {
                          label: "Authorized Access",
                          color: "hsl(var(--chart-3))",
                        },
                        unauthorized: {
                          label: "Unauthorized Attempts",
                          color: "hsl(var(--chart-4))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={bucketAccessData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="authorized"
                            stroke="var(--color-authorized)"
                            name="Authorized Access"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="unauthorized"
                            stroke="var(--color-unauthorized)"
                            name="Unauthorized Attempts"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle>NIST 800-53 Compliance Status</CardTitle>
                  <CardDescription>Current compliance status with NIST 800-53 access control policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={complianceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {complianceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logs">
              <Card>
                <CardHeader>
                  <CardTitle>IAM Audit Logs</CardTitle>
                  <CardDescription>Recent IAM activity and access attempts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                      <div>Time</div>
                      <div>User</div>
                      <div>Action</div>
                      <div>Resource</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      {logEntries.map((entry, index) => (
                        <div key={index} className="grid grid-cols-5 gap-4 p-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            {entry.time}
                          </div>
                          <div>{entry.user}</div>
                          <div>{entry.action}</div>
                          <div className="font-mono text-xs">{entry.resource}</div>
                          <div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                entry.status === "Success"
                                  ? "bg-cyber-green/10 text-cyber-green"
                                  : "bg-cyber-red/10 text-cyber-red"
                              }`}
                            >
                              {entry.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
