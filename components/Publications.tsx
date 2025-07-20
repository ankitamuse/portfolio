'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Users, Quote } from 'lucide-react'

const publications = [
  {
    title: "Detecting Log Anomaly Using Subword Attention Encoder and Probabilistic Feature Selection",
    journal: "Applied Intelligence",
    publisher: "Springer",
    year: "2023",
    status: "Published",
    authors: ["Ankita Sharma", "Co-authors"],
    abstract: "This paper presents a novel approach to log anomaly detection using advanced machine learning techniques. The method combines subword attention encoders with probabilistic feature selection to achieve high accuracy in identifying anomalous patterns in system logs.",
    keywords: ["Log Analysis", "Anomaly Detection", "Machine Learning", "Natural Language Processing", "System Monitoring"],
    doi: "10.1007/s10489-023-04674-6",
    citations: 36,
    url: "https://doi.org/10.1007/s10489-023-04674-6",
    type: "Journal Article"
  }
]



export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications & Research</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My research contributions and publications in machine learning, software engineering, 
            and system optimization.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Published Papers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BookOpen className="h-7 w-7 text-primary-600" />
              Published Research
            </h3>
            
            {publications.map((paper, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{paper.title}</h4>
                      {paper.url && (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="font-semibold">{paper.journal}</span>
                      <span>•</span>
                      <span>{paper.publisher}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {paper.citations} citations
                      </span>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {paper.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {paper.type}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        <Quote className="h-4 w-4 inline mr-1 text-gray-400" />
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Authors</h5>
                        <p className="text-gray-600">{paper.authors.join(", ")}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Keywords</h5>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map((keyword, keywordIndex) => (
                            <span
                              key={keywordIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {paper.doi && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>DOI:</strong> {paper.doi}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>



          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
              <p className="text-gray-600 mb-6">
                I&apos;m always open to research collaborations, paper reviews, and academic discussions. 
                Feel free to reach out if you&apos;d like to collaborate on any research projects.
              </p>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get In Touch
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
