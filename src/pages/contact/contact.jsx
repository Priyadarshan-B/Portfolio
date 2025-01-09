'use client'

import React, { useState, useRef } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const form = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current,
      'YOUR_PUBLIC_KEY' 
    )
      .then((result) => {
        console.log(result.text)
        setSubmitMessage('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      }, (error) => {
        console.log(error.text)
        setSubmitMessage('Failed to send message. Please try again.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="min-h-screen w-full  flex items-center justify-center px-4" data-aos="fade-up">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2"data-aos="fade-right">
          <div className="p-6 md:p-8" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4" >Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitMessage && (
                <p className={`text-center mt-4 text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="bg-gray-100 p-6 md:p-8" >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-gray-600 mr-4 text-xl" />
                <span className="text-gray-700">+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-600 mr-4 text-xl" />
                <a href="mailto:contact@example.com" className="text-gray-700 hover:text-blue-500">
                  contact@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-4 text-xl" />
                <span className="text-gray-700">123 Web Dev Street, Coding City, 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
