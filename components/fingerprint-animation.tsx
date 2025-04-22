"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function FingerprintAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw fingerprint circles
    const drawFingerprint = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // Draw outer circle
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, width / 2 - 5, 0, Math.PI * 2)
      ctx.strokeStyle = "#0070f3"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw fingerprint arcs
      const time = Date.now() / 1000
      const numArcs = 8

      for (let i = 0; i < numArcs; i++) {
        const radius = (width / 2 - 15) * (i / numArcs)
        const startAngle = (time * 0.5 + i * 0.2) % (Math.PI * 2)
        const endAngle = startAngle + Math.PI * (1 + Math.sin(time * 0.2 + i * 0.5) * 0.5)

        ctx.beginPath()
        ctx.arc(width / 2, height / 2, radius, startAngle, endAngle)

        // Gradient color based on position
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, "#0070f3")
        gradient.addColorStop(0.5, "#7928ca")
        gradient.addColorStop(1, "#00c8ff")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Draw scanning line
      const scanY = height / 2 + (Math.sin(time * 2) * height) / 3
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(width, scanY)
      ctx.strokeStyle = "rgba(0, 200, 255, 0.7)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add glow effect
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, width / 2 - 10, 0, Math.PI * 2)
      const glowGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
      glowGradient.addColorStop(0, "rgba(0, 112, 243, 0)")
      glowGradient.addColorStop(0.8, "rgba(0, 112, 243, 0)")
      glowGradient.addColorStop(1, "rgba(0, 112, 243, 0.2)")
      ctx.fillStyle = glowGradient
      ctx.fill()

      requestAnimationFrame(drawFingerprint)
    }

    const animationId = requestAnimationFrame(drawFingerprint)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      <canvas ref={canvasRef} width={100} height={100} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center text-xs text-cyber-blue font-mono">SECURE</div>
    </motion.div>
  )
}
