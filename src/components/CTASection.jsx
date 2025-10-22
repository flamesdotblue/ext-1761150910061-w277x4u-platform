import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(8,145,178,0.15),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/90 to-neutral-900/60 p-8 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Claim your holographic identity today</h3>
              <p className="mt-2 text-white/70 max-w-2xl">Free to start. Upgrade for advanced verification and fintech integrations when you need them.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex gap-3 w-full md:w-auto">
              <button className="inline-flex h-11 flex-1 md:flex-none items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-medium shadow-[0_20px_40px_-15px] shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-colors">Start Free</button>
              <button className="inline-flex h-11 flex-1 md:flex-none items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 text-sm font-medium hover:bg-white/10 transition-colors">Contact Sales</button>
            </motion.div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} HoloID. Secure, portable digital identity.</p>
      </div>
    </section>
  );
}
