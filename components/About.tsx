'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Award } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Backend Development',
    description: 'Expert in building scalable APIs and microservices architecture'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Specialized in ETL pipelines, data processing, and analytics platforms'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'AI-powered solutions for automation and intelligent systems'
  },
  {
    icon: Award,
    title: 'Leadership',
    description: 'Leading backend initiatives and mentoring development teams'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I&apos;m a passionate software engineer with a strong background in building robust, 
            scalable systems. My expertise spans across backend development, data engineering, 
            and machine learning, with a focus on creating innovative solutions that drive business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  With <strong>8 years of experience</strong> in software engineering, I&apos;ve had the privilege 
                  of working with industry leaders like Oracle, Cisco, and Nokia, where I&apos;ve designed 
                  and implemented solutions that scale to serve millions of users.
                </p>
                <p className="text-gray-600">
                  My expertise lies in building <strong>secure, OAuth2-enabled REST APIs</strong>, 
                  developing <strong>ML-driven platforms</strong> for log analysis, and creating 
                  <strong>automated systems</strong> that significantly improve operational efficiency.
                </p>
                <p className="text-gray-600">
                  I&apos;m passionate about leveraging cutting-edge technologies like <strong>Generative AI</strong> 
                  to solve complex problems and create innovative solutions that make a real impact.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
                <p className="text-gray-600">
                  Building real-time analytics and AI-powered code remediation tools at Oracle
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Publication</h4>
                <p className="text-gray-600">
                  Published research on &ldquo;Detecting Log Anomaly Using Subword Attention Encoder&rdquo; 
                  in Applied Intelligence (Springer)
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">
                  B.Tech in Electronics & Communication Engineering from MNIT Jaipur (CGPA: 8.49/10)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
