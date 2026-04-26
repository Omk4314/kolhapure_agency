import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Globe2, Layers, Menu, MessageSquare, PenTool, Sparkles, Terminal, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
              <span className="font-bold -mt-0.5">K</span>
            </div>
            Kolhapure.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/917276889611?text=Hi%20Kolhapure%20Agency,%20I%20would%20like%20to%20work%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Work with us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-md md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-20 h-full w-80 bg-neutral-900 border-l border-white/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-6 text-lg font-medium">
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#why-us"
                  className="text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Us
                </a>
              </div>

              <a
                href="https://wa.me/917276889611?text=Hi%20Kolhapure%20Agency,%20I%20would%20like%20to%20work%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full bg-white text-black font-semibold text-center hover:bg-neutral-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work with us
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Decoding complexity for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">global brands.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
           Trusted globally. We turn complex technical documentation and social presence into your strongest growth engines.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/917276889611?text=Hi%20Kolhapure%20Agency,%20I%20would%20like%20to%20work%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors group"
          >
            Book a content strategy call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="mailto:kolhapureom4314@gmail.com"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Get a free content audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Rooted in culture, <br/> scaling globally.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Kolhapure Content Agency was born from a simple observation: SaaS companies build brilliant products but struggle to explain them clearly. We've built a global agency dedicated to serving B2B and B2C SaaS companies worldwide.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We bridge the gap between engineering and marketing. Our team doesn't just write; we investigate, simplify, and elevate your technical narrative to resonate with developers and decision-makers alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { title: "Quality", desc: "No fluff. Just well-researched, deeply technical, and persuasive content.", icon: PenTool },
              { title: "Clarity", desc: "We translate complex architectures into compelling, easy-to-digest narratives.", icon: Layers },
              { title: "Consistency", desc: "From API docs to social threads, your brand voice remains unmistakably yours.", icon: CheckCircle2 },
              { title: "Global Reach", desc: "Our processes are remote-first, collaborating seamlessly across timezones.", icon: Globe2 },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white-[0.07] transition-colors">
                <value.icon className="w-8 h-8 text-neutral-300 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Expertise</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We focus exclusively on what we do best: creating high-leverage content that drives SaaS adoption and builds engaged communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Code2 className="w-32 h-32 text-indigo-400" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Technical SaaS Writing</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We write for the people who build. Our technical writers embed themselves in your product to create documentation that reduces support tickets and accelerates onboarding.
              </p>
              <ul className="space-y-4">
                {[
                  "Product documentation & Developer docs",
                  "API documentation & Integration guides",
                  "Knowledge base & Help-center articles",
                  "Release notes & Deep-dive technical blog posts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <TrendingUp className="w-32 h-32 text-pink-400" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Social Media Management</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Turn your founder's insights and product updates into viral moments. We craft social strategies that position your company as a category leader.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end strategy & targeted content planning",
                  "High-converting copy for LinkedIn & X (Twitter)",
                  "Visual storytelling for Instagram & visual platforms",
                  "Active community engagement & brand monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center">
            Why partner with Kolhapure?
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            We don't just act as a vendor; we integrate as an extension of your product and marketing teams. Our approach is uniquely tuned to the fast-paced SaaS lifecycle.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Native SaaS Understanding", desc: "We speak MRR, churn, APIs, and deployments natively." },
              { title: "Process-Driven Workflows", desc: "Agile methodologies ensure we ship content alongside your release cycles." },
              { title: "Remote-First Reliability", desc: "No matter your timezone, we communicate clearly and deliver relentlessly." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
                <div className="w-3 h-3 rounded-full bg-indigo-400" />
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to scale your narrative?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can elevate your technical documentation and social media presence to match the quality of your product.
          </p>
          <a href="mailto:kolhapureom4314@gmail.com" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors inline-block">
            Start the conversation
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 px-6 border-t border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
              <span className="font-bold -mt-0.5">K</span>
            </div>
            Kolhapure.
          </div>
          <p className="text-neutral-400 mb-6 max-w-sm">
            Technical SaaS content for global brands. Based in Kolhapur, reaching developers and founders worldwide.
          </p>
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Kolhapure Content Agency. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#why-us" className="hover:text-white transition-colors">Why Trust Us</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Work With Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Social</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-white/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}
