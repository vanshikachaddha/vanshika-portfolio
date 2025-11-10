import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const vibrantColors = ['#F06956', '#FBBD4C', '#F4A9B0', '#92AEC6', '#97C1C0']
  
  const languages = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚙️" },
    { name: "Rust", icon: "🦀" },
    { name: "SQL", icon: "🗄️" },
    { name: "Go", icon: "🐹" },
    { name: "Java", icon: "☕" },
    { name: "Verilog", icon: "🔌", familiar: true },
    { name: "MATLAB", icon: "🔬", familiar: true },
    { name: "HTML/CSS", icon: "🌐", familiar: true },
    { name: "kdb+", icon: "📊", familiar: true },
  ]

  const frameworks = [
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "scikit-learn", icon: "📈" },
    { name: "FastAPI", icon: "🚀" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tableau", icon: "📊" },
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
  ]

  const software = [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Grafana", icon: "📈" },
    { name: "Linux/UNIX", icon: "🐧" },
    { name: "GDB", icon: "🐛" },
    { name: "Agile", icon: "⚡" },
  ]

  const awards = [
    { activity: "180 Degrees Consulting", position: "Executive Board Advisor" },
    { activity: "Statistics + Data Science", position: "Teaching Assistant" },
    { activity: "Theta Tau", position: "Psi Delta Chapter" },
    { activity: "Rewriting the Code", position: "Member" },
    { activity: "Best Senior Design Project", position: null },
    { activity: "Deans List x 6", position: null },
  ]

  const canvasRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let isActive = true

    // Fluid simulation
    const blobs = []
    const mouse = { x: -1000, y: -1000 }
    let mouseMoved = false
    let lastMouseX = -1000
    let lastMouseY = -1000

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Blob {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 100 + 80
        this.life = 1.0
        this.decay = 0.015
        this.pulse = Math.random() * Math.PI * 2
        // Pick a random color from vibrant colors
        this.color = vibrantColors[Math.floor(Math.random() * vibrantColors.length)]
      }

      update() {
        this.life -= this.decay
        this.pulse += 0.1
        this.size += Math.sin(this.pulse) * 3
      }

      draw() {
        if (this.life <= 0) return
        
        // Convert hex color to RGB
        const hex = this.color.replace('#', '')
        const r = parseInt(hex.substr(0, 2), 16)
        const g = parseInt(hex.substr(2, 2), 16)
        const b = parseInt(hex.substr(4, 2), 16)
        
        const alpha = this.life * 0.6
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.9})`)
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`)
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add fuzzy edge effect with multiple layers
        for (let i = 0; i < 3; i++) {
          const fuzzySize = this.size + (i * 10)
          const fuzzyAlpha = alpha * (0.2 - i * 0.05)
          const fuzzyGradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.8, this.x, this.y, fuzzySize)
          fuzzyGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`)
          fuzzyGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${fuzzyAlpha})`)
          fuzzyGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
          
          ctx.fillStyle = fuzzyGradient
          ctx.beginPath()
          ctx.arc(this.x, this.y, fuzzySize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      isDead() {
        return this.life <= 0
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouseMoved = true
      
      // Create blob at cursor position
      const distance = Math.sqrt((mouse.x - lastMouseX) ** 2 + (mouse.y - lastMouseY) ** 2)
      if (distance > 30) {
        blobs.push(new Blob(mouse.x, mouse.y))
        lastMouseX = mouse.x
        lastMouseY = mouse.y
      }
    }

    const handleMouseLeave = () => {
      mouseMoved = false
    }

    // Add event listeners to the section so it works everywhere
    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      if (!isActive) return
      
      // Fade effect for smoother animation
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw blobs (fade away)
      for (let i = blobs.length - 1; i >= 0; i--) {
        blobs[i].update()
        blobs[i].draw()
        if (blobs[i].isDead()) {
          blobs.splice(i, 1)
        }
      }


      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      isActive = false
      window.removeEventListener('resize', resizeCanvas)
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vanshikachaddha23@gmail.com')
    alert('Email copied to clipboard!')
  }

  return (
    <section ref={sectionRef} id="about" className="relative w-full min-h-screen py-20 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden" style={{ 
      backgroundColor: '#000000'
    }}>
      {/* Interactive Fluid Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 uppercase" style={{ fontWeight: 700, letterSpacing: '-0.02em', fontFamily: "'Oswald', sans-serif" }}>
            ABOUT ME
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg relative group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(240, 105, 86, 0.6), 0 0 80px rgba(240, 105, 86, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-black rounded-lg px-4 py-3 flex items-center justify-center">
                  <p className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>BOSTON UNIVERSITY</p>
                </div>
                <div>
                  <h3 className="text-black text-2xl font-bold mb-1 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>B.S. COMPUTER ENGINEERING</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>Boston University • Expected May 2026</p>
                </div>
              </div>
            </motion.div>

            {/* Awards & Activities Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg relative group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(251, 189, 76, 0.6), 0 0 80px rgba(251, 189, 76, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="mb-4">
                <h3 className="text-black text-xl font-bold uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>AWARDS & ACTIVITIES</h3>
              </div>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="text-gray-700 text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    <span className="font-bold">{award.activity}</span>
                    {award.position && (
                      <>
                        <span> • </span>
                        <span className="font-normal">{award.position}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Button Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-4 shadow-lg relative group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(244, 169, 176, 0.6), 0 0 80px rgba(244, 169, 176, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors w-full"
              >
                <span className="text-xl">✉️</span>
                <span className="text-sm font-medium uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>SAY HI - COPY EMAIL</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg relative group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(146, 174, 198, 0.6), 0 0 80px rgba(146, 174, 198, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 className="text-black text-3xl font-bold mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>TECH STACK</h3>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-black text-lg font-semibold mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>LANGUAGE</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <span>{lang.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-6">
              <h4 className="text-black text-lg font-semibold mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>FRAMEWORK</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <span>{framework.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Software */}
            <div>
              <h4 className="text-black text-lg font-semibold mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>SOFTWARE</h4>
              <div className="flex flex-wrap gap-2">
                {software.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
