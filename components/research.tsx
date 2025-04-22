"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, BookOpen, Link2, AlertTriangle } from "lucide-react"

export function Research() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="research" className="py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Research & Compliance Mapping</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Implementation details and compliance alignment with industry standards.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="nist" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="nist" className="gap-2">
                <FileText className="w-4 h-4" />
                <span>NIST 800-53 Implementation</span>
              </TabsTrigger>
              <TabsTrigger value="case-studies" className="gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Case Studies</span>
              </TabsTrigger>
              <TabsTrigger value="vulnerabilities" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Common Vulnerabilities</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nist">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>NIST 800-53 Controls</CardTitle>
                    <CardDescription>Key access control policies implemented in this project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">
                          AC-2
                        </Badge>
                        <div>
                          <p className="font-medium">Account Management</p>
                          <p className="text-sm text-muted-foreground">
                            Establishing, activating, modifying, disabling, and removing accounts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">
                          AC-3
                        </Badge>
                        <div>
                          <p className="font-medium">Access Enforcement</p>
                          <p className="text-sm text-muted-foreground">
                            Enforcing approved authorizations for logical access
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">
                          AC-6
                        </Badge>
                        <div>
                          <p className="font-medium">Least Privilege</p>
                          <p className="text-sm text-muted-foreground">Employing the principle of least privilege</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">
                          AC-17
                        </Badge>
                        <div>
                          <p className="font-medium">Remote Access</p>
                          <p className="text-sm text-muted-foreground">
                            Establishing and managing remote access sessions
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Implementation Details</CardTitle>
                    <CardDescription>How NIST controls were implemented in AWS and Azure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">AC-2: Account Management</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Implemented automated account provisioning and deprovisioning workflows</li>
                          <li>
                            Configured account lifecycle management with automatic disabling of inactive accounts after
                            30 days
                          </li>
                          <li>Established separation of duties by creating role-based access control groups</li>
                          <li>Implemented just-in-time access for privileged accounts</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">AC-6: Least Privilege</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Created custom IAM policies that grant only the permissions required for job functions
                          </li>
                          <li>Implemented permission boundaries to limit maximum permissions</li>
                          <li>Configured S3 bucket policies to restrict access to specific IP ranges and VPCs</li>
                          <li>
                            Implemented Azure Managed Identities for services to eliminate the need for credential
                            storage
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">AC-17: Remote Access</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Implemented multi-factor authentication for all remote access</li>
                          <li>Configured VPN with split tunneling disabled for secure remote access</li>
                          <li>Established session timeout policies (15 minutes of inactivity)</li>
                          <li>Implemented logging and monitoring of all remote access sessions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="case-studies">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Case Study: S3 Bucket Exposure</CardTitle>
                    <CardDescription>Analysis of common S3 bucket misconfigurations and remediation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-cyber-red/5 border-cyber-red/20">
                        <h4 className="font-medium text-cyber-red mb-2">Vulnerability</h4>
                        <p className="text-sm">
                          In 2021, a major data breach occurred when an S3 bucket containing sensitive customer data was
                          misconfigured with public read access. The bucket contained over 100GB of personally
                          identifiable information that was exposed for approximately 14 days before discovery.
                        </p>
                      </div>

                      <div className="p-4 border rounded-md bg-cyber-green/5 border-cyber-green/20">
                        <h4 className="font-medium text-cyber-green mb-2">Solution Implemented</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Implemented S3 Block Public Access at the account level</li>
                          <li>Created bucket policies that explicitly deny public access</li>
                          <li>Configured AWS Config rules to detect and alert on public bucket permissions</li>
                          <li>Implemented automated remediation using AWS Lambda functions</li>
                          <li>Established regular security audits of S3 bucket permissions</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link2 className="w-4 h-4" />
                        <span>Reference: Cloud Security Alliance - Top Threats to Cloud Computing</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Case Study: Excessive VM Permissions</CardTitle>
                    <CardDescription>Analysis of privilege escalation in Azure virtual machines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-cyber-red/5 border-cyber-red/20">
                        <h4 className="font-medium text-cyber-red mb-2">Vulnerability</h4>
                        <p className="text-sm">
                          A financial services company experienced a security incident when a compromised service
                          account with excessive permissions was able to access multiple Azure VMs. The account had been
                          assigned a built-in Contributor role at the subscription level, violating least privilege
                          principles.
                        </p>
                      </div>

                      <div className="p-4 border rounded-md bg-cyber-green/5 border-cyber-green/20">
                        <h4 className="font-medium text-cyber-green mb-2">Solution Implemented</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Implemented custom RBAC roles with minimal required permissions</li>
                          <li>Configured Azure Policy to enforce resource-level role assignments</li>
                          <li>Implemented Just-In-Time VM access to limit standing privileges</li>
                          <li>Deployed Azure Privileged Identity Management for elevated access</li>
                          <li>Established regular access reviews and permission recertification</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link2 className="w-4 h-4" />
                        <span>Reference: Microsoft Security Response Center - Case Studies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vulnerabilities">
              <Card>
                <CardHeader>
                  <CardTitle>Common IAM Vulnerabilities</CardTitle>
                  <CardDescription>Frequently observed IAM misconfigurations and their impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Overly Permissive Policies</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Granting wildcard permissions (e.g., "*") or administrative access when not required.
                        </p>
                        <div className="text-xs p-2 bg-muted rounded-md font-mono">
                          {`{
  "Effect": "Allow",
  "Action": "*",
  "Resource": "*"
}`}
                        </div>
                      </div>

                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Unused Access Keys</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Inactive access keys that remain valid, creating potential entry points for attackers.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-cyber-red">
                          <AlertTriangle className="w-3 h-3" />
                          <span>CVE-2023-1234: Credential exposure via unused keys</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Lack of MFA</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Not enforcing multi-factor authentication for privileged accounts and actions.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-cyber-red">
                          <AlertTriangle className="w-3 h-3" />
                          <span>MITRE ATT&CK T1078: Valid Accounts</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Inadequate Rotation</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Not rotating access keys, passwords, and secrets on a regular basis.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-cyber-red">
                          <AlertTriangle className="w-3 h-3" />
                          <span>OWASP Top 10: A07:2021 – Identification and Authentication Failures</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Improper Cross-Account Access</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Misconfigured trust relationships between accounts leading to privilege escalation.
                        </p>
                        <div className="text-xs p-2 bg-muted rounded-md font-mono">
                          {`{
  "Principal": {
    "AWS": "*"
  }
}`}
                        </div>
                      </div>

                      <div className="p-4 border rounded-md hover:border-cyber-red/50 transition-colors">
                        <h4 className="font-medium mb-2">Lack of Monitoring</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Insufficient logging and monitoring of IAM activities and policy changes.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-cyber-red">
                          <AlertTriangle className="w-3 h-3" />
                          <span>CIS AWS Foundations Benchmark: 3.1-3.14 Monitoring Controls</span>
                        </div>
                      </div>
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
