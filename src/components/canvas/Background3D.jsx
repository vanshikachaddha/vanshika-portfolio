import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'

const Background3D = () => {
  const meshRef = useRef()
  const particlesRef = useRef()

  // Create particles - more visible
  const particles = useMemo(() => {
    const count = 3000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 60
      positions[i3 + 1] = (Math.random() - 0.5) * 60
      positions[i3 + 2] = (Math.random() - 0.5) * 60

      const color = new Color()
      color.setHSL(0.5 + Math.random() * 0.3, 0.8, 0.7 + Math.random() * 0.2)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <>
      {/* Animated mesh - more visible */}
      <mesh ref={meshRef} position={[0, 0, -10]}>
        <torusGeometry args={[8, 3, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#888888"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Additional rotating mesh */}
      <mesh position={[0, 0, -15]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[6, 2, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#666666"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Particles - more visible */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Enhanced lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#8888ff" />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
    </>
  )
}

export default Background3D

