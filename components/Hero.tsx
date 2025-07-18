'use client'

import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="gradient-text">Ankita Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Senior Software Engineer with 8 years of expertise in 
              <span className="text-primary-600 font-semibold"> backend development</span>, 
              <span className="text-primary-600 font-semibold"> data engineering</span>, and 
              <span className="text-primary-600 font-semibold"> machine learning</span> solutions
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Currently building real-time analytics and AI-powered solutions at Oracle. 
              Passionate about scalable systems, automation, and innovative technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2 text-lg px-8 py-3"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/resume.txt"
              download="Ankita_Sharma_Resume.txt"
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-3"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/ankitamuse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitamuse/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ankitamuse@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
