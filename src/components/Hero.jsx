import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null)
  const [stripedLetters, setStripedLetters] = useState(new Set())
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [bgColor, setBgColor] = useState('#F06956')

  const vibrantColors = ['#F06956', '#FBBD4C', '#F4A9B0', '#92AEC6', '#97C1C0']
  
  // Multiple text options
  const textOptions = [
    { firstLine: "Hai, I'm", secondLine: "Vanshika" },
    { firstLine: "I love", secondLine: "Data" },
    { firstLine: "I write", secondLine: "Code" },
    { firstLine: "I solve", secondLine: "Problems" },
    { firstLine: "I love", secondLine: "Movies" },
  ]

  const currentText = textOptions[currentTextIndex]
  const firstLine = currentText.firstLine
  const secondLine = currentText.secondLine

  useEffect(() => {
    // Animate background color - slower changes
    const colorInterval = setInterval(() => {
      const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)]
      setBgColor(randomColor)
    }, 6000)

    return () => {
      clearInterval(colorInterval)
    }
  }, [])

  const handleLetterHover = (letterId) => {
    setHoveredLetter(letterId)
    // Toggle striped state on hover - if already striped, make it solid again
    setStripedLetters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(letterId)) {
        newSet.delete(letterId)
      } else {
        newSet.add(letterId)
      }
      return newSet
    })
  }

  const handleLetterClick = (letterId) => {
    setStripedLetters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(letterId)) {
        newSet.delete(letterId)
      } else {
        newSet.add(letterId)
      }
      return newSet
    })
  }

  const handleDotClick = (index) => {
    setCurrentTextIndex(index)
    // Reset striped letters when changing text
    setStripedLetters(new Set())
  }

  const handleLearnMoreClick = (e) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center justify-center min-h-screen"
        >
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTextIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold mb-6 leading-tight uppercase"
                style={{ fontWeight: 800, letterSpacing: '0.02em', fontFamily: "'Oswald', sans-serif" }}
              >
                {/* First line */}
                <div className="whitespace-nowrap">
                  {firstLine.split('').map((char, index) => {
                    if (char === ' ') {
                      return <span key={`first-${index}`}>&nbsp;</span>
                    }
                    if (char === ',' || char === "'") {
                      return <span key={`first-${index}`}>{char}</span>
                    }
                    const letterId = `first-${index}`
                    const isHovered = hoveredLetter === letterId
                    const isStriped = stripedLetters.has(letterId)
                    
                    return (
                      <span
                        key={`${currentTextIndex}-first-${index}`}
                        onMouseEnter={() => handleLetterHover(letterId)}
                        onMouseLeave={() => setHoveredLetter(null)}
                        onClick={() => handleLetterClick(letterId)}
                        className={(isHovered || isStriped) ? 'striped-text-hover' : ''}
                        style={{
                          transition: 'all 0.3s ease',
                          display: 'inline-block',
                          color: (isHovered || isStriped) ? 'transparent' : 'white',
                          fontWeight: 800,
                          cursor: 'pointer'
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </div>
                {/* Second line */}
                <div className="whitespace-nowrap mt-2">
                  {secondLine.split('').map((char, index) => {
                    const letterId = `second-${index}`
                    const isHovered = hoveredLetter === letterId
                    const isStriped = stripedLetters.has(letterId)
                    
                    return (
                      <span
                        key={`${currentTextIndex}-second-${index}`}
                        onMouseEnter={() => handleLetterHover(letterId)}
                        onMouseLeave={() => setHoveredLetter(null)}
                        onClick={() => handleLetterClick(letterId)}
                        className={(isHovered || isStriped) ? 'striped-text-hover' : ''}
                        style={{
                          transition: 'all 0.3s ease',
                          display: 'inline-block',
                          color: (isHovered || isStriped) ? 'transparent' : 'white',
                          fontWeight: 800,
                          cursor: 'pointer'
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </div>
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-base sm:text-lg md:text-xl mt-6 font-normal uppercase leading-relaxed max-w-2xl mx-auto"
            style={{ fontWeight: 300, letterSpacing: '0.1em', lineHeight: '1.8', fontFamily: "'Oswald', sans-serif" }}
          >
            I turn ideas into reality, one commit at a time
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleLearnMoreClick}
            className="mt-10 px-10 py-4 border-2 border-white text-gray-800 uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300"
            style={{ 
              fontWeight: 500, 
              letterSpacing: '0.1em', 
              fontSize: '14px',
              color: 'white',
              backgroundColor: 'transparent',
              fontFamily: "'Oswald', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white'
              e.target.style.color = bgColor
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'white'
            }}
          >
            Learn More
          </motion.button>
          
          {/* Circular indicators at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-3"
          >
            {textOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer hover:scale-125 ${
                  index === currentTextIndex ? 'bg-white' : 'bg-transparent striped-circle'
                }`}
                style={{
                  backgroundImage: index !== currentTextIndex ? 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px)' : 'none',
                  backgroundSize: '4px 4px'
                }}
                aria-label={`Switch to text ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero