import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../constants'

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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

  return (
    <section id="work" className="relative w-full min-h-screen py-20 px-6 sm:px-12 md:px-16 lg:px-20" style={{ backgroundColor: '#E5E5E5' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase mb-12" style={{ fontWeight: 400, letterSpacing: '0.02em' }}>
            My Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black text-xl font-bold mb-2 group-hover:underline leading-tight uppercase" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                    {project.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-xs">i</span>
                    <span className="text-xs">View Details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2">More Work</p>
          <p className="text-white/80 text-lg">
            Due to client NDA's, I'm not able to publicly display all of my work. If you would like access to see my full portfolio please contact me.
          </p>
        </motion.div>
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
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                  
                  {selectedProject.features && (
                    <div className="mb-6">
                      <h4 className="text-white text-xl font-semibold mb-3">Key Features</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

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