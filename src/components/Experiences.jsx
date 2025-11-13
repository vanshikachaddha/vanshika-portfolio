import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../constants'

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(null)
  const canvasRef = useRef(null)

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience)
  }

  const handleCloseModal = () => {
    setSelectedExperience(null)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    const particles = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create timeline particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connecting lines (like a timeline network)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and animate particles
      particles.forEach((particle, index) => {
        // Move particles along timeline-like paths
        particle.x += Math.sin(index * 0.5 + Date.now() * 0.0005) * particle.speed
        particle.y += Math.cos(index * 0.3 + Date.now() * 0.0003) * particle.speed

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="experiences" className="relative w-full min-h-screen py-20 px-8 sm:px-16 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Animated Timeline Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        style={{ zIndex: 0 }}
      />
      
      {/* Pastel color blobs - same colors from Hero section */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: '#F06956' }}></div>
      <div className="absolute top-1/4 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float animation-delay-2000" style={{ backgroundColor: '#FBBD4C' }}></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: '#F4A9B0' }}></div>
      <div className="absolute top-1/2 right-1/4 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float animation-delay-6000" style={{ backgroundColor: '#92AEC6', width: '22rem', height: '22rem' }}></div>
      <div className="absolute bottom-1/4 right-10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-8000" style={{ backgroundColor: '#97C1C0', width: '19rem', height: '19rem' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-12" style={{ fontWeight: 700, letterSpacing: '-0.02em', fontFamily: "'Oswald', sans-serif" }}>
            Work Experience
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="relative space-y-16">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0
              const yearMatch = experience.date.match(/\d{4}/)
              const year = yearMatch ? yearMatch[0] : ''
              
              // Check if this is the first occurrence of this year
              const isFirstOfYear = year && experiences.findIndex((e, i) => {
                const eYearMatch = e.date.match(/\d{4}/)
                const eYear = eYearMatch ? eYearMatch[0] : ''
                return eYear === year
              }) === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year label - only show for first occurrence of each year */}
                  {year && isFirstOfYear && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block ${
                      isEven ? 'md:left-1/2' : 'md:left-1/2'
                    }`}>
                      <div className="bg-white px-4 py-2 rounded-full border-2 border-black">
                        <span className="text-black text-lg font-bold" style={{ fontWeight: 700 }}>
                          {year}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  } md:w-1/2`}>
                    <motion.div 
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 group relative"
                      onClick={() => handleExperienceClick(experience)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Logo */}
                      <div className={`flex items-center gap-4 mb-4 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      } justify-start`}>
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                          <img
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-black text-3xl font-bold mb-2 uppercase" style={{ fontWeight: 700 }}>
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-2" style={{ fontWeight: 400 }}>
                        {experience.company_name}
                      </p>
                      <p className="text-gray-500 text-sm mb-4" style={{ fontWeight: 500 }}>
                        {experience.date}
                      </p>

                      {/* Description on hover */}
                      <div className={`mt-4 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:mt-4 ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      } text-left`}>
                        <ul className="space-y-2">
                          {experience.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                              • {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-20"
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>

                <div className="p-8">
                  {/* Logo and Company Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                      <img
                        src={selectedExperience.icon}
                        alt={selectedExperience.company_name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-4xl font-bold mb-2 uppercase" style={{ fontWeight: 700 }}>
                        {selectedExperience.title}
                      </h3>
                      <p className="text-gray-600 text-xl mb-2" style={{ fontWeight: 400 }}>
                        {selectedExperience.company_name}
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontWeight: 500 }}>
                        {selectedExperience.date}
                      </p>
                    </div>
                  </div>

                  {/* Description Points */}
                  <div className="mt-8">
                    <h4 className="text-black text-xl font-semibold mb-4" style={{ fontWeight: 600 }}>
                      Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedExperience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-700 text-base leading-relaxed" style={{ fontWeight: 300 }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Experiences

