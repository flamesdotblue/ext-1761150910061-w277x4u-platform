import React from 'react';
import { Sparkles, Shield, CreditCard, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Holographic Profile',
    desc: 'A vibrant, iridescent identity card that looks stunning across devices and themes.'
  },
  {
    icon: Shield,
    title: 'Zero-Knowledge Proofs',
    desc: 'Verify what matters without revealing everything. Privacy by default.'
  },
  {
    icon: CreditCard,
    title: 'Fintech Ready',
    desc: 'Bank-grade encryption and compliance hooks for payments and KYC workflows.'
  },
  {
    icon: BadgeCheck,
    title: 'Portable Verification',
    desc: 'Your blue check travels with you—apps can trust, users can verify.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Built for trust and style</h2>
          <p className="mt-3 text-white/70">A fusion of security engineering and futuristic design.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-400/80 to-blue-600/80 flex items-center justify-center shadow-[0_10px_30px_-10px] shadow-cyan-500/50">
                <f.icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
