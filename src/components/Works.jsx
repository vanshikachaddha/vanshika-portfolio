import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../constants'

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const canvasRef = useRef(null)
  const scrollContainerRef = useRef(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  // Pixel art animated background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const pixelSize = 20
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Pixel sprites
    const sprites = []
    const spriteCount = 15
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3']

    class PixelSprite {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = pixelSize * (0.5 + Math.random() * 1.5)
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = 0.3 + Math.random() * 0.4
        this.shape = Math.floor(Math.random() * 3) // 0: square, 1: circle, 2: diamond
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.imageSmoothingEnabled = false

        const pixelX = Math.floor(this.x / pixelSize) * pixelSize
        const pixelY = Math.floor(this.y / pixelSize) * pixelSize

        if (this.shape === 0) {
          // Square
          ctx.fillRect(pixelX, pixelY, this.size, this.size)
        } else if (this.shape === 1) {
          // Circle (pixelated)
          ctx.beginPath()
          ctx.arc(pixelX + this.size / 2, pixelY + this.size / 2, this.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Diamond
          ctx.beginPath()
          ctx.moveTo(pixelX + this.size / 2, pixelY)
          ctx.lineTo(pixelX + this.size, pixelY + this.size / 2)
          ctx.lineTo(pixelX + this.size / 2, pixelY + this.size)
          ctx.lineTo(pixelX, pixelY + this.size / 2)
          ctx.closePath()
          ctx.fill()
        }
        ctx.restore()
      }
    }

    // Create sprites
    for (let i = 0; i < spriteCount; i++) {
      sprites.push(new PixelSprite())
    }

    // Grid pattern
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.lineWidth = 1
      ctx.imageSmoothingEnabled = false

      for (let x = 0; x < canvas.width; x += pixelSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += pixelSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      drawGrid()

      // Update and draw sprites
      sprites.forEach(sprite => {
        sprite.update()
        sprite.draw()
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
    <section id="work" className="relative w-full min-h-screen py-20 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden" style={{ backgroundColor: '#E5E5E5' }}>
      {/* Pixel art animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0, imageRendering: 'pixelated' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4" style={{ fontWeight: 700, letterSpacing: '-0.02em', fontFamily: "'Oswald', sans-serif" }}>
            My Work
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-0" style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
            This is what I've worked on throughout my career.
          </p>
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Right arrow - Netflix style */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-0 bottom-0 w-16 flex items-center justify-end pr-2 z-20 pointer-events-none"
                style={{ 
                  background: 'linear-gradient(to left, rgba(229, 229, 229, 0.8) 0%, rgba(229, 229, 229, 0.6) 30%, transparent 100%)',
                  zIndex: 20
                }}
              >
                <button
                  className="bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    const container = scrollContainerRef.current?.querySelector('.flex.overflow-x-auto')
                    if (container) {
                      container.scrollBy({ left: 600, behavior: 'smooth' })
                    }
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white"
                  >
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left arrow - Netflix style */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-start pl-2 z-20 pointer-events-none"
                style={{ 
                  background: 'linear-gradient(to right, rgba(229, 229, 229, 0.8) 0%, rgba(229, 229, 229, 0.6) 30%, transparent 100%)',
                  zIndex: 20
                }}
              >
                <button
                  className="bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    const container = scrollContainerRef.current?.querySelector('.flex.overflow-x-auto')
                    if (container) {
                      container.scrollBy({ left: -600, behavior: 'smooth' })
                    }
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white"
                  >
                    <path 
                      d="M15 18L9 12L15 6" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer relative flex-shrink-0 group/card"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-square relative w-80 sm:w-96 md:w-[400px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/card:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center pointer-events-none"
                >
                  <h3 className="text-white text-2xl font-bold mb-3 uppercase" style={{ fontWeight: 700, letterSpacing: '0.05em', fontFamily: "'Oswald', sans-serif" }}>
                    {project.name}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed max-w-xs" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                    {project.comingSoon ? 'Coming Soon' : project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-white text-4xl font-bold mb-4">{selectedProject.name}</h3>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed whitespace-pre-line">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                  
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white text-xl font-semibold mb-3">Key Features</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm px-4 py-2 rounded-full bg-white/10 text-white/80"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {selectedProject.source_code_link && (
                    <motion.a
                      href={selectedProject.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View on GitHub →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Works