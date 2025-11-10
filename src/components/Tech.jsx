import React from 'react'
import { motion } from 'framer-motion'
import { technologies } from '../constants'

const Tech = () => {
  const interests = [
    { name: "Digital", icon: "💻" },
    { name: "Design", icon: "🎨" },
    { name: "Development", icon: "⚡" },
    { name: "3D Graphics", icon: "🎬" },
    { name: "Travel", icon: "✈️" },
    { name: "Photography", icon: "📸" },
    { name: "Music", icon: "🎵" },
    { name: "Gaming", icon: "🎮" },
  ]

  return (
    <section id="tech" className="relative w-full min-h-screen py-20 px-8 sm:px-16" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 300, letterSpacing: '0.1em' }}>Technologies & Interests</p>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
            I love digital
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mb-12" style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
            I specialise in rich interactive experiences for web, mobile and tablet devices.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white/80 text-sm text-center font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl mb-8" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
            I love to play
          </h3>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mb-12" style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
            Work makes up such a big part of our lives, so it's important to integrate it in a positive way.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </span>
                <p className="text-white/80 text-base text-center font-medium">{interest.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tech