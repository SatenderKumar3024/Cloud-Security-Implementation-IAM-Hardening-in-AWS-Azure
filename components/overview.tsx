"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Users, Database, Server } from "lucide-react"

export function Overview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="overview" className="py-20 bg-cyber-dark relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent pointer-events-none"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyber-blue/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-cyber-purple">
              Project Overview
            </h2>
            <p className="text-white max-w-2xl mx-auto leading-relaxed">
              A comprehensive approach to implementing least-privilege access principles in cloud environments.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Card className="h-full border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-blue/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="w-8 h-8 text-cyber-blue mb-2 group-hover:text-cyber-blue/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-blue transition-colors">
                  IAM Policy Configuration
                </CardTitle>
                <CardDescription>Implemented least-privilege access principles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Configured IAM policies for 50+ AWS S3 buckets and Azure VMs, ensuring that users and services have
                  only the permissions necessary to perform their tasks.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-purple/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Lock className="w-8 h-8 text-cyber-purple mb-2 group-hover:text-cyber-purple/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-purple transition-colors">
                  Vulnerability Reduction
                </CardTitle>
                <CardDescription>30% reduction based on Qualys scan reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Implemented security controls that resulted in a significant reduction in vulnerabilities related to
                  excessive permissions and access control issues.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-cyan/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FileCheck className="w-8 h-8 text-cyber-cyan mb-2 group-hover:text-cyber-cyan/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-cyan transition-colors">Compliance Alignment</CardTitle>
                <CardDescription>NIST 800-53 access control policies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Aligned IAM configurations with NIST 800-53 access control policies, ensuring regulatory compliance
                  and following security best practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-green/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Users className="w-8 h-8 text-cyber-green mb-2 group-hover:text-cyber-green/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-green transition-colors">
                  Zero Trust Architecture
                </CardTitle>
                <CardDescription>Integrated Zero Trust principles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Implemented Zero Trust principles by enforcing strict identity verification for every person and
                  device attempting to access resources, regardless of location.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-cyber-yellow/20 hover:border-cyber-yellow/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-yellow/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Database className="w-8 h-8 text-cyber-yellow mb-2 group-hover:text-cyber-yellow/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-yellow transition-colors">AWS IAM & S3</CardTitle>
                <CardDescription>Secure bucket policies and access points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Implemented secure bucket policies, access points, and IAM roles to ensure that S3 data is protected
                  from unauthorized access while remaining available to legitimate users.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-cyber-red/20 hover:border-cyber-red/50 transition-all duration-300 bg-cyber-charcoal hover:shadow-lg hover:shadow-cyber-red/10 group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Server className="w-8 h-8 text-cyber-red mb-2 group-hover:text-cyber-red/100 transition-colors" />
                </motion.div>
                <CardTitle className="group-hover:text-cyber-red transition-colors">
                  Azure IAM & VM Configuration
                </CardTitle>
                <CardDescription>Role-based access control implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-balance text-white">
                  Configured Azure role-based access control (RBAC) for virtual machines and resources, implementing
                  just-in-time access and privileged identity management.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
