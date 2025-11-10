import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'Vanshika',
          from_email: form.email,
          to_email: 'your-email@example.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setLoading(false)
          setSubmitted(true)
          setForm({
            name: '',
            email: '',
            message: '',
          })
          setTimeout(() => setSubmitted(false), 5000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-8 sm:px-16" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-white/60 text-sm uppercase tracking-wider mb-2" style={{ fontWeight: 300, letterSpacing: '0.1em' }}>Get in Touch</p>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
            Interested?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto" style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
            If you've got an exciting project you're interested in working together on, get in touch!
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
              Name <span className="text-white/60">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
              Email <span className="text-white/60">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
              Message <span className="text-white/60">*</span> <span className="text-white/40 text-xs">(1000 Characters)</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="8"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={1000}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Your message..."
            />
            <p className="text-white/40 text-xs mt-1 text-right">
              {form.message.length}/1000
            </p>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Sending...' : submitted ? 'Thank you! Your message has been sent.' : 'Send Message'}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/80 text-center"
            >
              I will respond to your message as soon as possible.
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm mb-2">
            If you prefer to contact me directly, send your Email to: <a href="mailto:your-email@example.com" className="text-white hover:underline">your-email@example.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact