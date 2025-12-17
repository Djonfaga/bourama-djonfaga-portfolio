import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree Form ID
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">Let's work together</h2>
            <p className="text-muted text-lg mb-12">
              I'm currently available for new opportunities in renewable energy and engineering. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:bdjonfaga@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 bg-card border border-white/10 rounded-xl flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted">Email</p>
                  <span className="text-white font-medium group-hover:text-primary transition-colors">bdjonfaga@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+905525487580" className="flex items-center group">
                <div className="w-12 h-12 bg-card border border-white/10 rounded-xl flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted">Phone</p>
                  <span className="text-white font-medium group-hover:text-primary transition-colors">+90 552 548 75 80</span>
                </div>
              </a>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-card border border-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted">Location</p>
                  <span className="text-white font-medium">Ankara, Turkiye</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex justify-center items-center py-4 px-6 font-bold rounded-xl text-dark transition-all transform hover:-translate-y-1 ${
                  status === "success" 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-primary hover:bg-emerald-400 shadow-[0_4px_20px_rgba(16,215,168,0.2)]"
                }`}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {status !== "sending" && status !== "success" && <Send className="ml-2 h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
