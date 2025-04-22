"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Code, CheckSquare, ExternalLink } from "lucide-react"

export function ProjectLinks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Project Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive tools and resources for IAM security implementation.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="generator" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="generator" className="gap-2">
                <Code className="w-4 h-4" />
                <span>IAM Policy Generator</span>
              </TabsTrigger>
              <TabsTrigger value="visualizer" className="gap-2">
                <FileText className="w-4 h-4" />
                <span>Permission Visualizer</span>
              </TabsTrigger>
              <TabsTrigger value="checklist" className="gap-2">
                <CheckSquare className="w-4 h-4" />
                <span>Compliance Checklist</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generator">
              <Card>
                <CardHeader>
                  <CardTitle>IAM Policy Generator</CardTitle>
                  <CardDescription>Create least-privilege IAM policies for AWS and Azure resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cloud Provider</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>AWS</option>
                          <option>Azure</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Resource Type</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>S3 Bucket</option>
                          <option>EC2 Instance</option>
                          <option>Lambda Function</option>
                          <option>DynamoDB Table</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Access Level</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="read" className="rounded border-gray-300" />
                          <label htmlFor="read" className="text-sm">
                            Read
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="write" className="rounded border-gray-300" />
                          <label htmlFor="write" className="text-sm">
                            Write
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="list" className="rounded border-gray-300" />
                          <label htmlFor="list" className="text-sm">
                            List
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="delete" className="rounded border-gray-300" />
                          <label htmlFor="delete" className="text-sm">
                            Delete
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Resource ARN/ID</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border bg-background"
                        placeholder="arn:aws:s3:::example-bucket/*"
                      />
                    </div>

                    <div className="p-4 bg-muted rounded-md font-mono text-xs overflow-auto">
                      {`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::example-bucket",
        "arn:aws:s3:::example-bucket/*"
      ],
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.0.2.0/24"
        }
      }
    }
  ]
}`}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reset</Button>
                  <Button>Generate Policy</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="visualizer">
              <Card>
                <CardHeader>
                  <CardTitle>S3/VM Permission Visualizer</CardTitle>
                  <CardDescription>Visualize and analyze permission relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Resource Type</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>S3 Bucket</option>
                          <option>Azure VM</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Resource Name</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>data-archive-bucket</option>
                          <option>app-logs-bucket</option>
                          <option>user-uploads-bucket</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">View Type</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>User Access</option>
                          <option>Role Access</option>
                          <option>Service Access</option>
                        </select>
                      </div>
                    </div>

                    <div className="border rounded-md p-4 h-80 flex items-center justify-center bg-muted/30">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-cyber-blue" />
                        </div>
                        <p className="text-sm text-muted-foreground">Select a resource to visualize permissions</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Load Sample Data
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 border rounded-md">
                        <div className="font-medium mb-2">Direct Access</div>
                        <div className="text-muted-foreground">Users/roles with direct access to this resource</div>
                      </div>

                      <div className="p-3 border rounded-md">
                        <div className="font-medium mb-2">Inherited Access</div>
                        <div className="text-muted-foreground">Access inherited from parent resources or groups</div>
                      </div>

                      <div className="p-3 border rounded-md">
                        <div className="font-medium mb-2">Service Access</div>
                        <div className="text-muted-foreground">AWS/Azure services with access to this resource</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Analyze Permissions</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="checklist">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Checklist</CardTitle>
                  <CardDescription>Track your progress against security best practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Framework</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>NIST 800-53</option>
                          <option>CIS AWS Foundations</option>
                          <option>ISO 27001</option>
                          <option>GDPR</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>Access Control</option>
                          <option>Identity Management</option>
                          <option>Logging and Monitoring</option>
                          <option>Data Protection</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 border rounded-md flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" checked />
                        <div>
                          <div className="font-medium">AC-2: Account Management</div>
                          <div className="text-sm text-muted-foreground">
                            Implement automated account lifecycle management
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-md flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" checked />
                        <div>
                          <div className="font-medium">AC-3: Access Enforcement</div>
                          <div className="text-sm text-muted-foreground">
                            Enforce approved authorizations for logical access
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-md flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" checked />
                        <div>
                          <div className="font-medium">AC-6: Least Privilege</div>
                          <div className="text-sm text-muted-foreground">
                            Employ the principle of least privilege for all users and services
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-md flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div>
                          <div className="font-medium">AC-17: Remote Access</div>
                          <div className="text-sm text-muted-foreground">
                            Establish and manage secure remote access sessions
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-md flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div>
                          <div className="font-medium">AC-24: Access Control Decisions</div>
                          <div className="text-sm text-muted-foreground">
                            Establish access control decisions based on approved authorizations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">3 of 5 controls implemented (60%)</div>
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Export Report</span>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
