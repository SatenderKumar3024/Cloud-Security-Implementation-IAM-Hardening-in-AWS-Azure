"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera, Text } from "@react-three/drei"

// Fingerprint scan effect
function FingerprintScan({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef<THREE.Group>(null)
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 1 ? 0 : prev + 0.01))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={ref} position={position as any} scale={[scale, scale, scale]}>
      <mesh>
        <ringGeometry args={[0.8, 1, 32]} />
        <meshStandardMaterial color="#00b7eb" emissive="#00b7eb" emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0, 0.8, 32]} />
        <meshStandardMaterial color="#00b7eb" emissive="#00b7eb" emissiveIntensity={0.5} transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, scanProgress * 2 - 1, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 0.05]} />
        <meshStandardMaterial color="#00b7eb" emissive="#00b7eb" emissiveIntensity={1} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

// Security model with shield
function SecurityModel({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={ref} position={position as any} scale={[scale, scale, scale]}>
      <octahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00b7eb"
        metalness={0.8}
        roughness={0.2}
        emissive="#00b7eb"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

// Lock model for security
function LockModel({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group ref={ref} position={position as any} scale={[scale, scale, scale]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial
          color="#8884d8"
          metalness={0.9}
          roughness={0.1}
          emissive="#8884d8"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial
          color="#8884d8"
          metalness={0.9}
          roughness={0.1}
          emissive="#8884d8"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}

// Shield model
function ShieldModel({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef<THREE.Group>(null)
  const [pulseScale, setPulseScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScale((prev) => (prev === 1 ? 1.1 : 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
      ref.current.scale.set(pulseScale * scale, pulseScale * scale, pulseScale * scale)
    }
  })

  return (
    <group ref={ref} position={position as any}>
      <mesh>
        <coneGeometry args={[1, 1.5, 32]} />
        <meshStandardMaterial
          color="#39ff14"
          metalness={0.7}
          roughness={0.3}
          emissive="#39ff14"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}

// Glowing security sphere
function SecuritySphere({ position = [0, 0, 0], scale = 1, color = "#8884d8" }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.2
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={ref} position={position as any} scale={[scale, scale, scale]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

// Grid for cyber background
function SecurityGrid() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[40, 40, "#00b7eb", "#1a1a1a"]} />
      <gridHelper args={[40, 40, "#8884d8", "#1a1a1a"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

// Floating particles
function FloatingParticles({ count = 100 }) {
  const particles = useRef<THREE.Points>(null)

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.getElapsedTime() * 0.02
      particles.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlePositions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#00b7eb" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

// Data stream visualization
function DataStream({ count = 20, length = 10 }) {
  const lines = useRef<THREE.Group>(null)

  const linePositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30
      const y = (Math.random() - 0.5) * 30
      const z = (Math.random() - 0.5) * 30

      const direction = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ).normalize()

      positions.push(
        new THREE.Vector3(x, y, z),
        new THREE.Vector3(x + direction.x * length, y + direction.y * length, z + direction.z * length),
      )
    }
    return positions
  }, [count, length])

  const lines3D = useMemo(() => {
    return linePositions
      .map((start, i) => {
        if (i % 2 === 0) {
          const end = linePositions[i + 1]
          const points = [start, end]
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          const color = i % 6 === 0 ? "#00b7eb" : i % 6 === 2 ? "#8884d8" : "#39ff14"
          const material = new THREE.LineBasicMaterial({ color })
          return <line key={i} geometry={geometry} material={material} />
        }
        return null
      })
      .filter(Boolean)
  }, [linePositions])

  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return <group ref={lines}>{lines3D}</group>
}

// Binary code particles
function BinaryParticles({ count = 50 }) {
  const binaryRef = useRef<THREE.Group>(null)
  const [particles, setParticles] = useState<{ position: [number, number, number]; value: string }[]>([])

  useEffect(() => {
    const newParticles = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30] as [
          number,
          number,
          number,
        ],
        value: Math.random() > 0.5 ? "1" : "0",
      })
    }
    setParticles(newParticles)
  }, [count])

  useFrame((state) => {
    if (binaryRef.current) {
      binaryRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={binaryRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <planeGeometry args={[0.5, 0.5]} />
          <meshBasicMaterial
            color={particle.value === "1" ? "#39ff14" : "#00b7eb"}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

// Orbiting security nodes - Fixed version
function OrbitingNodes() {
  const orbitRef = useRef<THREE.Group>(null)
  const [nodes, setNodes] = useState<{ radius: number; speed: number; phase: number; size: number; color: string }[]>(
    [],
  )
  const [nodePositions, setNodePositions] = useState<Array<[number, number, number]>>([])

  // Initialize nodes
  useEffect(() => {
    const newNodes = []
    for (let i = 0; i < 8; i++) {
      newNodes.push({
        radius: 3 + Math.random() * 5,
        speed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        size: 0.2 + Math.random() * 0.3,
        color: ["#00b7eb", "#8884d8", "#39ff14", "#00c8ff"][Math.floor(Math.random() * 4)],
      })
    }
    setNodes(newNodes)

    // Initialize positions
    const initialPositions = newNodes.map((node) => {
      return [
        Math.cos(node.phase) * node.radius,
        Math.sin(node.phase * 0.5) * 2,
        Math.sin(node.phase) * node.radius,
      ] as [number, number, number]
    })
    setNodePositions(initialPositions)
  }, [])

  // Update positions in animation frame
  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }

    // Update node positions based on time
    const newPositions = nodes.map((node, i) => {
      return [
        Math.cos(state.clock.getElapsedTime() * node.speed + node.phase) * node.radius,
        Math.sin(state.clock.getElapsedTime() * node.speed * 0.5) * 2,
        Math.sin(state.clock.getElapsedTime() * node.speed + node.phase) * node.radius,
      ] as [number, number, number]
    })
    setNodePositions(newPositions)
  })

  return (
    <group ref={orbitRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={nodePositions[i] || [0, 0, 0]}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// NEW: Cyber Text floating in 3D space
function CyberText({ position = [0, 0, 0], text = "SECURITY", color = "#00b7eb", scale = 1 }) {
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={textRef} position={position as any} scale={[scale, scale, scale]}>
      <Text fontSize={1} color={color} font="/fonts/GeistMono-Bold.ttf" anchorX="center" anchorY="middle">
        {text}
      </Text>
    </group>
  )
}

// NEW: Security breach visualization
function SecurityBreach({ position = [0, 0, 0], scale = 1 }) {
  const breachRef = useRef<THREE.Group>(null)
  const [breachState, setBreachState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBreachState((prev) => (prev >= 1 ? 0 : prev + 0.01))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (breachRef.current) {
      breachRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={breachRef} position={position as any} scale={[scale, scale, scale]}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ff0000"
          wireframe
          emissive="#ff0000"
          emissiveIntensity={0.5 + breachState * 0.5}
        />
      </mesh>
      <mesh scale={[1 + breachState * 0.5, 1 + breachState * 0.5, 1 + breachState * 0.5]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#ff0000"
          transparent
          opacity={0.2 - breachState * 0.2}
          emissive="#ff0000"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

// NEW: Data packet visualization
function DataPackets({ count = 15 }) {
  const packetsRef = useRef<THREE.Group>(null)
  const [packets, setPackets] = useState<
    {
      position: [number, number, number]
      destination: [number, number, number]
      progress: number
      speed: number
      color: string
    }[]
  >([])

  useEffect(() => {
    const newPackets = []
    for (let i = 0; i < count; i++) {
      const start = [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30] as [
        number,
        number,
        number,
      ]

      const end = [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30] as [
        number,
        number,
        number,
      ]

      newPackets.push({
        position: start,
        destination: end,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        color: ["#00b7eb", "#8884d8", "#39ff14", "#ffff00"][Math.floor(Math.random() * 4)],
      })
    }
    setPackets(newPackets)
  }, [count])

  useFrame(() => {
    setPackets((prev) =>
      prev.map((packet) => {
        const newProgress = packet.progress + packet.speed
        if (newProgress >= 1) {
          // Reset packet with new start and end points
          const start = [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30] as [
            number,
            number,
            number,
          ]

          const end = [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30] as [
            number,
            number,
            number,
          ]

          return {
            ...packet,
            position: start,
            destination: end,
            progress: 0,
          }
        }

        // Calculate new position based on progress
        const newPosition: [number, number, number] = [
          packet.position[0] + (packet.destination[0] - packet.position[0]) * newProgress,
          packet.position[1] + (packet.destination[1] - packet.position[1]) * newProgress,
          packet.position[2] + (packet.destination[2] - packet.position[2]) * newProgress,
        ]

        return {
          ...packet,
          progress: newProgress,
          position: newPosition,
        }
      }),
    )
  })

  return (
    <group ref={packetsRef}>
      {packets.map((packet, i) => (
        <mesh key={i} position={packet.position}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color={packet.color}
            emissive={packet.color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// NEW: Firewall visualization
function Firewall({ position = [0, 0, 0], scale = 1 }) {
  const firewallRef = useRef<THREE.Group>(null)
  const [pulseState, setPulseState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseState((prev) => (prev >= 1 ? 0 : prev + 0.02))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (firewallRef.current) {
      firewallRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={firewallRef} position={position as any} scale={[scale, scale, scale]}>
      {/* Main firewall cylinder */}
      <mesh>
        <cylinderGeometry args={[3, 3, 0.2, 32]} />
        <meshStandardMaterial
          color="#39ff14"
          transparent
          opacity={0.3}
          emissive="#39ff14"
          emissiveIntensity={0.3 + pulseState * 0.2}
        />
      </mesh>

      {/* Pulse wave */}
      <mesh scale={[1 + pulseState * 0.5, 1, 1 + pulseState * 0.5]}>
        <torusGeometry args={[3, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#39ff14"
          transparent
          opacity={0.5 - pulseState * 0.5}
          emissive="#39ff14"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

// Main scene
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00b7eb" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#8884d8" />

      {/* Original elements */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <SecurityModel position={[-5, 0, 0]} scale={0.8} />
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
        <SecuritySphere position={[5, 1, -2]} scale={0.6} color="#00b7eb" />
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <SecuritySphere position={[0, -2, -1]} scale={0.8} color="#39ff14" />
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <LockModel position={[3, -1, 2]} scale={0.7} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <ShieldModel position={[-3, 2, -3]} scale={0.6} />
      </Float>

      <FingerprintScan position={[4, 3, -1]} scale={1.2} />

      {/* New elements */}
      <CyberText position={[-6, 4, -5]} text="AWS" color="#00b7eb" scale={1.5} />
      <CyberText position={[6, 4, -5]} text="AZURE" color="#8884d8" scale={1.5} />
      <CyberText position={[0, 6, -8]} text="IAM HARDENING" color="#00b7eb" scale={2} />

      <SecurityBreach position={[-8, -3, -2]} scale={0.8} />
      <Firewall position={[0, -5, -5]} scale={1} />
      <DataPackets count={20} />

      <SecurityGrid />
      <FloatingParticles count={200} />
      <DataStream count={40} length={5} />
      <BinaryParticles count={70} />
      <OrbitingNodes />

      <Environment preset="city" />
    </>
  )
}

export function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-60 three-d-container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

const Actions = () => {
  return null
}

const Action = () => {
  return null
}
