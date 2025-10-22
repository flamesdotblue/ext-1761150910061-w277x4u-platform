import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/40 to-neutral-950"></div>
      <div className="pointer-events-none absolute -inset-x-20 -top-32 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),rgba(0,0,0,0))]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-28 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
        >
          <BadgeCheck size={14} className="text-cyan-400" />
          Verified digital identity for the modern web
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Iridescent identity, secured with a glow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
        >
          Own your presence across the fintech and social universe. HoloID merges privacy-first credentials with a sleek, holographic profile that travels with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <button className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-medium shadow-[0_20px_40px_-15px] shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-colors">
            Create your HoloID
          </button>
          <button className="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 text-sm font-medium hover:bg-white/10 transition-colors">
            Explore the tech
          </button>
        </motion.div>
      </div>
    </section>
  );
}
