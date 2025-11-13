import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { modernFamilyImage, blockbusterImage, superstoreImage, theBearImage, severanceImage, whiteLotusImage, manOnTheInsideImage, newAmsterdamImage, suitsImage, atypicalImage, communityImage, schittsCreekImage, himymImage, brooklyn99Image } from '../assets'

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedRec, setSelectedRec] = useState(null)

  // Combined TV/Movie recommendations - you can customize these
  const recommendations = [
    { id: 0, title: "Man on the Inside", year: "2024", genre: "Thriller/Drama", type: "TV", image: manOnTheInsideImage, isImage: true, description: "A gripping thriller series following a man's dangerous journey navigating the criminal underworld." },
    { id: 1, title: "Suits", year: "2011-2019", genre: "Legal Drama", type: "TV", image: suitsImage, isImage: true, description: "A legal drama following a brilliant college dropout who starts working as a law associate for a successful lawyer despite never having attended law school." },
    { id: 2, title: "Modern Family", year: "2009-2020", genre: "Comedy", type: "TV", image: modernFamilyImage, isImage: true, description: "A hilarious mockumentary-style sitcom following three diverse families and their everyday adventures." },
    { id: 3, title: "Blockbuster", year: "2022", genre: "Comedy", type: "TV", image: blockbusterImage, isImage: true, description: "A workplace comedy about the last Blockbuster video store in America and its employees trying to keep it afloat." },
    { id: 4, title: "Superstore", year: "2015-2021", genre: "Comedy", type: "TV", image: superstoreImage, isImage: true, description: "A workplace comedy following employees at a fictional big-box store, exploring their everyday lives and relationships." },
    { id: 5, title: "The Bear", year: "2022", genre: "Drama/Comedy", type: "TV", image: theBearImage, isImage: true, description: "A chef returns to Chicago to run his family's sandwich shop." },
    { id: 6, title: "Severance", year: "2022", genre: "Sci-Fi/Thriller", type: "TV", image: severanceImage, isImage: true, description: "Work-life balance taken to an extreme." },
    { id: 7, title: "Atypical", year: "2017-2021", genre: "Comedy/Drama", type: "TV", image: atypicalImage, isImage: true, description: "A coming-of-age story about an 18-year-old on the autism spectrum who searches for love and independence." },
    { id: 8, title: "Community", year: "2009-2015", genre: "Comedy", type: "TV", image: communityImage, isImage: true, description: "A group of students at a community college form a study group and become unlikely friends." },
    { id: 9, title: "Schitt's Creek", year: "2015-2020", genre: "Comedy", type: "TV", image: schittsCreekImage, isImage: true, description: "When filthy-rich video store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to relocate to Schitt's Creek, a small depressing town they once bought as a joke." },
    { id: 10, title: "How I Met Your Mother", year: "2005-2014", genre: "Comedy", type: "TV", image: himymImage, isImage: true, description: "A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother." },
    { id: 11, title: "Brooklyn 99", year: "2013-2021", genre: "Comedy", type: "TV", image: brooklyn99Image, isImage: true, description: "A comedy series following the exploits of the detectives and staff at the 99th precinct of the New York Police Department in Brooklyn." },
    { id: 12, title: "Everything Everywhere All at Once", year: "2022", genre: "Sci-Fi/Action", type: "Movie", image: "🫘", description: "A multiverse adventure about family and existence." },
    { id: 13, title: "Parasite", year: "2019", genre: "Thriller/Drama", type: "Movie", image: "🏠", description: "Class warfare through a darkly comedic lens." },
    { id: 14, title: "The Last of Us", year: "2023", genre: "Drama/Horror", type: "TV", image: "🍄", description: "Post-apocalyptic journey of survival." },
    { id: 15, title: "Dune", year: "2021", genre: "Sci-Fi/Epic", type: "Movie", image: "🏜️", description: "Epic space opera on the desert planet Arrakis." },
    { id: 16, title: "White Lotus", year: "2021", genre: "Comedy/Drama", type: "TV", image: whiteLotusImage, isImage: true, description: "Satirical look at privilege and tourism." },
    { id: 17, title: "New Amsterdam", year: "2018-2023", genre: "Medical Drama", type: "TV", image: newAmsterdamImage, isImage: true, description: "A medical drama following the medical director of America's oldest public hospital as he breaks the rules to heal the system." },
    { id: 18, title: "The Menu", year: "2022", genre: "Thriller/Comedy", type: "Movie", image: "🍽️", description: "A dark satire of fine dining culture." },
    { id: 19, title: "Fleabag", year: "2016-2019", genre: "Comedy/Drama", type: "TV", image: "☕", description: "Raw and hilarious exploration of modern womanhood." },
    { id: 20, title: "Top Gun: Maverick", year: "2022", genre: "Action/Drama", type: "Movie", image: "✈️", description: "High-flying action and nostalgia." },
    { id: 21, title: "Dopesick", year: "2021", genre: "Drama", type: "TV", image: "💊", description: "The opioid crisis in America." },
    { id: 22, title: "Triangle of Sadness", year: "2022", genre: "Comedy/Satire", type: "Movie", image: "🛳️", description: "Class commentary on a luxury cruise." },
    { id: 23, title: "Chernobyl", year: "2019", genre: "Drama/History", type: "TV", image: "☢️", description: "The 1986 nuclear disaster." },
    { id: 24, title: "The Banshees of Inisherin", year: "2022", genre: "Comedy/Drama", type: "Movie", image: "🇮🇪", description: "A friendship breakup on a remote Irish island." },
    { id: 25, title: "Aftersun", year: "2022", genre: "Drama", type: "Movie", image: "☀️", description: "A tender father-daughter vacation memory." },
  ]

  const handleCardClick = (rec) => {
    setSelectedRec(rec)
  }

  const handleCloseModal = () => {
    setSelectedRec(null)
  }

  const handleGetRecs = () => {
    window.location.href = 'mailto:vanshikachaddha23@gmail.com?subject=Movie/TV Recommendations Request'
  }

  const scrollContainer = (direction, containerId) => {
    const container = document.getElementById(containerId)
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="contact" className="relative w-full min-h-screen py-8 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: '#141414' }}>
      <div className="max-w-full mx-auto relative z-10 pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 sm:px-8"
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 uppercase" style={{ fontWeight: 700, letterSpacing: '-0.02em', fontFamily: "'Oswald', sans-serif" }}>
            My Recommendations
          </h2>
          <p className="text-white/70 text-lg sm:text-xl mb-6" style={{ fontWeight: 300 }}>
            Curated TV shows and movies I love. Want personalized recs?
          </p>
          <motion.button
            onClick={handleGetRecs}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors text-lg uppercase tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Single Scrollable Row */}
        <div className="relative group">
          {/* Scroll buttons */}
          <button
            onClick={() => scrollContainer('left', 'recommendations-row')}
            className="absolute left-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-r from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start pl-2"
          >
            <span className="text-4xl">‹</span>
          </button>
          <button
            onClick={() => scrollContainer('right', 'recommendations-row')}
            className="absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end pr-2"
          >
            <span className="text-4xl">›</span>
          </button>

          <div
            id="recommendations-row"
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-8 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-48 sm:w-56 cursor-pointer"
                onMouseEnter={() => setHoveredCard(rec.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(rec)}
              >
                <div className="relative bg-gray-900 rounded-md overflow-hidden group/card transition-transform duration-300"
                  style={{
                    transform: hoveredCard === rec.id ? 'scale(1.1) translateY(-10px)' : 'scale(1)',
                    zIndex: hoveredCard === rec.id ? 50 : 1
                  }}
                >
                  {/* Image area */}
                  <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden relative">
                    {rec.isImage ? (
                      <img 
                        src={rec.image} 
                        alt={rec.title}
                        className="w-full h-full object-cover"
                        style={rec.title === "Superstore" ? { objectPosition: "center" } : {}}
                      />
                    ) : (
                      <span className="text-6xl sm:text-7xl">{rec.image}</span>
                    )}
          </div>

                  {/* Info overlay on hover */}
                  {hoveredCard === rec.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-3"
                    >
                      <h4 className="text-white font-bold text-sm mb-1">{rec.title}</h4>
                      <p className="text-white/70 text-xs">{rec.year} • {rec.genre}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          </div>

        {/* Detail Modal */}
        {selectedRec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 rounded-lg max-w-lg w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-colors"
            >
                ×
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-800 flex items-center justify-center">
                  {selectedRec.isImage ? (
                    <img 
                      src={selectedRec.image} 
                      alt={selectedRec.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">{selectedRec.image}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-1">{selectedRec.title}</h3>
                  <p className="text-white/70 text-sm">{selectedRec.year} • {selectedRec.genre}</p>
                </div>
              </div>
              <p className="text-white/80 text-base leading-relaxed">{selectedRec.description}</p>
              <motion.button
                onClick={handleGetRecs}
                className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-colors uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get More Recs
              </motion.button>
            </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact
