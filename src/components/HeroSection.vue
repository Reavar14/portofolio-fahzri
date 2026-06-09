<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
  >
    <!-- Gradient blobs -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style="animation-delay:2s" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-24">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6 animate-fade-in-down">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <!-- Name -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 animate-fade-in-up leading-tight">
            Hi, I'm
            <span class="gradient-text block text-shadow-glow">Fahzri Ahmad</span>
          </h1>

          <!-- Typing animation -->
          <div class="flex items-center justify-center lg:justify-start gap-3 mb-6 h-10 animate-fade-in" style="animation-delay:0.3s">
            <span class="text-gray-400 text-lg">I'm a</span>
            <span class="text-lg font-semibold text-white min-w-[260px] text-left">
              <span class="text-primary-400">{{ displayedText }}</span>
              <span class="animate-pulse text-accent-cyan">|</span>
            </span>
          </div>

          <!-- Description -->
          <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style="animation-delay:0.5s">
            S1 Teknik Informatika Universitas Esa Unggul — IPK
            <span class="text-primary-400 font-semibold">3.77/4.00</span>.
            Passionate in building scalable web apps and data-driven solutions.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in" style="animation-delay:0.7s">
            <a href="/cv-fahzri-ahmad.pdf" download class="btn-primary flex items-center gap-2 text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
              Download CV
            </a>
            <button @click="scrollToContact" class="btn-outline flex items-center gap-2 text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact Me
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-in" style="animation-delay:0.9s">
            <a href="https://github.com/fahzriahmad" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/fahzriahmad" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:fahzriahmad@email.com"
               class="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="flex-shrink-0 animate-fade-in" style="animation-delay:0.4s">
          <div class="relative">
            <!-- Outer glow ring -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-purple to-accent-cyan blur-2xl opacity-40 animate-pulse-slow scale-110" />
            <!-- Rotating border -->
            <div class="relative w-64 h-64 lg:w-80 lg:h-80">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-purple to-accent-cyan animate-spin-slow p-0.5">
                <div class="w-full h-full rounded-full bg-dark-900" />
              </div>
              <!-- Profile image -->
              <div class="absolute inset-2 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 overflow-hidden border-2 border-primary-500/20 animate-float">
                <!-- Avatar fallback — replace src with your actual photo -->
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-900/80 to-dark-700">
                  <span class="text-8xl lg:text-9xl font-black gradient-text">FA</span>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 glass-card px-3 py-1.5 text-xs font-semibold text-accent-cyan border-accent-cyan/30 animate-bounce-slow">
              Vue.js ✦
            </div>
            <div class="absolute -bottom-4 -left-4 glass-card px-3 py-1.5 text-xs font-semibold text-accent-purple border-accent-purple/30 animate-bounce-slow" style="animation-delay:1s">
              Laravel ✦
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce-slow">
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const texts = [
  'Software Developer',
  'Frontend Developer',
  'Vue.js Enthusiast',
  'Laravel Developer',
  'Problem Solver',
]

const displayedText = ref('')
let textIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typeEffect = () => {
  const current = texts[textIndex]

  if (!isDeleting) {
    displayedText.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      timer = setTimeout(typeEffect, 1800)
      return
    }
  } else {
    displayedText.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }
  }

  timer = setTimeout(typeEffect, isDeleting ? 60 : 90)
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  timer = setTimeout(typeEffect, 500)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>
