import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // ----------------------------------------------------------------------
    // TODO: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree Form ID
    // 1. Go to https://formspree.io/
    // 2. Create a new form
    // 3. Paste the ID (e.g., "mzbnqjro") or full URL below
    // ----------------------------------------------------------------------
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

    try {
      setStatus("sending");
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a href="mailto:bdjonfaga@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    bdjonfaga@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a href="tel:+905525487580" className="text-gray-600 hover:text-primary transition-colors">
                    +90 552 548 75 80
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Ankara, Turkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                  placeholder="How can I help you?"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  status === "success" 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {status !== "sending" && status !== "success" && <Send className="ml-2 h-4 w-4" />}
              </button>
              {status === "error" && (
                <p className="mt-2 text-sm text-red-600 text-center">
                  Oops! There was a problem sending your message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;