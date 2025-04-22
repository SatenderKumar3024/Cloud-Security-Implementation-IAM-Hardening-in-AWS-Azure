"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Lock, CheckCircle, Clock } from "lucide-react"

// Pulsing Shield component from the animation list
function ShieldPulse() {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      className="flex items-center justify-center"
    >
      <Shield className="w-12 h-12 text-cyber-blue" />
    </motion.div>
  )
}

export function SecurityFeatures() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [consentGiven, setConsentGiven] = useState(false)
  const [lastScanned, setLastScanned] = useState<string | null>(null)

  const handleScan = () => {
    setLastScanned(new Date().toLocaleTimeString())
  }

  return (
    <section id="security" className="py-20 bg-background/50 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-cyber-purple">
            Security Awareness
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive security features and awareness components.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* GDPR Consent Simulation */}
          <Card className="border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyber-blue" />
                <span>GDPR Consent Simulation</span>
              </CardTitle>
              <CardDescription>Demonstration of proper consent collection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-gradient-to-br from-background to-cyber-blue/5">
                  <p className="text-sm mb-4 leading-relaxed">
                    This website collects personal data to enhance your experience. We process your data in accordance
                    with our Privacy Policy.
                  </p>

                  {consentGiven ? (
                    <div className="flex items-center gap-2 text-cyber-green">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Consent provided</span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full sm:w-auto bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/90 hover:to-cyber-purple/90"
                        onClick={() => setConsentGiven(true)}
                      >
                        Accept All
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto border-cyber-blue/30 hover:border-cyber-blue/60"
                        onClick={() => setConsentGiven(true)}
                      >
                        Essential Only
                      </Button>
                    </div>
                  )}
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>Compliant with GDPR Article 7: Conditions for consent</p>
                  <p>Implements Privacy by Design principles</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secure Access Badge */}
          <Card className="border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyber-purple" />
                <span>Secure Access Badge</span>
              </CardTitle>
              <CardDescription>Visual representation of security status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="relative">
                  <ShieldPulse />
                  <div className="absolute inset-0 rounded-full border-4 border-cyber-purple/30 border-t-cyber-purple animate-rotate-slow" />
                </div>

                <div className="text-center">
                  <Badge
                    variant="outline"
                    className="mb-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border-cyber-purple/30"
                  >
                    Zero Trust Verified
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    All access is authenticated, authorized, and encrypted
                  </p>
                </div>

                <div className="w-full space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Authentication</span>
                    <span>MFA Enabled</span>
                  </div>
                  <Progress value={100} className="h-1 bg-cyber-purple/20" indicatorClassName="bg-cyber-purple" />

                  <div className="flex justify-between text-xs">
                    <span>Authorization</span>
                    <span>Least Privilege</span>
                  </div>
                  <Progress value={90} className="h-1 bg-cyber-blue/20" indicatorClassName="bg-cyber-blue" />

                  <div className="flex justify-between text-xs">
                    <span>Encryption</span>
                    <span>TLS 1.3</span>
                  </div>
                  <Progress value={95} className="h-1 bg-cyber-cyan/20" indicatorClassName="bg-cyber-cyan" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Last Scanned Timestamp */}
          <Card className="border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyber-cyan" />
                <span>Security Scan Status</span>
              </CardTitle>
              <CardDescription>Real-time security scanning simulation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-gradient-to-br from-background to-cyber-cyan/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${lastScanned ? "bg-cyber-green animate-pulse" : "bg-cyber-yellow"}`}
                      ></div>
                      <span className="text-sm font-medium">{lastScanned ? "Scan Complete" : "Ready to Scan"}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleScan}
                      className="border-cyber-cyan/30 hover:border-cyber-cyan/60 hover:bg-cyber-cyan/10"
                    >
                      Scan Now
                    </Button>
                  </div>

                  {lastScanned && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Last Scanned</span>
                        <span>{lastScanned}</span>
                      </div>

                      <div className="flex items-center gap-2 text-cyber-green text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>No vulnerabilities detected</span>
                      </div>

                      <div className="relative h-8 border rounded-md overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/10 to-transparent animate-scan"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-xs">
                          Scanning for IAM misconfigurations...
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>AWS IAM Policies</span>
                    <Badge variant="outline" className="text-cyber-green">
                      Secure
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Azure RBAC Assignments</span>
                    <Badge variant="outline" className="text-cyber-green">
                      Secure
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>S3 Bucket Policies</span>
                    <Badge variant="outline" className="text-cyber-green">
                      Secure
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
