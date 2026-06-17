<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <p class="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Get in touch</p>
        <h2 class="section-title gradient-text">Let's Work Together</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mx-auto mb-4" />
        <p class="section-subtitle">
          Open for full-time roles, freelance projects, or just a friendly chat about tech
        </p>
      </div>

      <!-- Contact Info — centered -->
      <div class="flex justify-center animate-on-scroll">
        <div class="w-full max-w-lg space-y-6">
          <div class="glass-card p-8">
            <h3 class="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
            <p class="text-gray-400 leading-relaxed mb-8">
              Saya selalu terbuka untuk peluang baru, proyek menarik, atau sekadar diskusi seputar teknologi.
              Jangan ragu untuk menghubungi saya!
            </p>

            <!-- Contact Links -->
            <div class="space-y-4">
              <a
                v-for="contact in contacts"
                :key="contact.label"
                :href="contact.href"
                :target="contact.external ? '_blank' : undefined"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  :style="`background: ${contact.color}20; border: 1px solid ${contact.color}30`"
                >
                  <span v-html="contact.icon" :style="`color: ${contact.color}`" class="w-5 h-5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-500 mb-0.5">{{ contact.label }}</p>
                  <p class="text-white font-medium text-sm truncate group-hover:text-primary-400 transition-colors">
                    {{ contact.value }}
                  </p>
                </div>
                <svg class="w-4 h-4 text-gray-600 group-hover:text-primary-400 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Status Card -->
          <div class="glass-card p-5 flex items-center gap-4 border-green-500/20">
            <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0 shadow-lg shadow-green-400/50" />
            <div>
              <p class="text-white font-semibold text-sm">Currently Available</p>
              <p class="text-gray-500 text-xs">Open to full-time roles & freelance projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  {
    label: 'Email',
    value: 'faizulahmad09@gmail.com',
    href: 'mailto:faizulahmad09@gmail.com',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    color: '#6366f1',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/faizul-ahmad-fahzri',
    href: 'https://www.linkedin.com/in/faizul-ahmad-fahzri',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    color: '#0077b5',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Reavar14',
    href: 'https://github.com/Reavar14',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    color: '#e5e7eb',
    external: true,
  },
]
</script>
