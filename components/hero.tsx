"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield, Lock, FileText, Database, Server } from "lucide-react"
import { FingerprintAnimation } from "@/components/fingerprint-animation"
import { TypingTagline } from "@/components/typing-tagline"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    })
  }, [controls])

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-dark z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-purple/5 z-0"></div>

      <motion.div className="relative z-10 px-4 md:px-6" style={{ opacity, y }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 text-cyber-blue mb-6 backdrop-blur-sm border border-cyber-blue/10"
          >
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Cloud Security Implementation</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-white mb-8 leading-relaxed"
          >
            A comprehensive approach to implementing least-privilege access principles, reducing vulnerabilities by 30%,
            and aligning with NIST 800-53 access control policies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/90 hover:to-cyber-purple/90 transition-all duration-300 shadow-lg hover:shadow-cyber-blue/20"
            >
              <Shield className="w-4 h-4" />
              <span>View Project</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>Download Report</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-24 h-24">
              <FingerprintAnimation />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 text-xl font-medium"
          >
            <TypingTagline
              phrases={[
                "Information Security Analyst",
                "Cloud Security Expert",
                "IAM Implementation Specialist",
                "AWS & Azure Security Professional",
              ]}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[10%] text-cyber-blue/30 hidden lg:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Shield size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-[15%] text-cyber-purple/30 hidden lg:block"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <Lock size={40} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[10%] text-cyber-cyan/30 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <Database size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[15%] text-cyber-green/30 hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      >
        <Server size={40} />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-dark to-transparent z-10" />
    </div>
  )
}
