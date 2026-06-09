<template>
  <section id="experience" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800/50 pointer-events-none" />
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <p class="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">My journey</p>
        <h2 class="section-title gradient-text">Experience & Certifications</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mx-auto" />
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Experience Timeline -->
        <div class="animate-on-scroll">
          <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            Work Experience
          </h3>

          <!-- Timeline -->
          <div class="relative">
            <!-- Vertical line -->
            <div class="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-purple to-transparent" />

            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative pl-12 pb-10 last:pb-0"
            >
              <!-- Dot -->
              <div class="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center shadow-lg shadow-primary-500/30">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>

              <div class="glass-card-hover p-5">
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 class="font-bold text-white">{{ exp.role }}</h4>
                    <p class="text-primary-400 text-sm font-medium">{{ exp.company }}</p>
                  </div>
                  <span class="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap border border-white/10">
                    {{ exp.period }}
                  </span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-3">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in exp.tech" :key="tech" class="tag-badge">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="animate-on-scroll" style="transition-delay: 0.2s">
          <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            Certifications
          </h3>

          <div class="space-y-4">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="glass-card-hover p-5 flex items-start gap-4"
            >
              <!-- Icon -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                :style="`background: ${cert.color}20; border: 1px solid ${cert.color}30`"
              >
                {{ cert.icon }}
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-white text-sm mb-0.5 truncate">{{ cert.title }}</h4>
                <p :style="`color: ${cert.color}`" class="text-sm font-medium mb-1">{{ cert.issuer }}</p>
                <p class="text-gray-500 text-xs mb-2">{{ cert.date }}</p>
                <p class="text-gray-400 text-xs leading-relaxed">{{ cert.description }}</p>
              </div>
              <!-- Verified badge -->
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Education Card -->
          <div class="mt-6 glass-card p-5 border-primary-500/20">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
                🎓
              </div>
              <div>
                <h4 class="font-bold text-white">S1 Teknik Informatika</h4>
                <p class="text-primary-400 text-sm font-medium">Universitas Esa Unggul</p>
                <p class="text-gray-500 text-xs mt-1">IPK: <span class="text-primary-400 font-bold">3.77 / 4.00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Junior Frontend Developer',
    company: 'Tech Company',
    period: '2023 – Present',
    description:
      'Mengembangkan antarmuka web modern menggunakan Vue.js dan Tailwind CSS. Berkolaborasi dengan tim backend untuk integrasi REST API. Melakukan code review dan optimasi performa aplikasi.',
    tech: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'REST API', 'Git'],
  },
]

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'RevoU',
    date: '2023',
    icon: '🚀',
    color: '#6366f1',
    description: 'Menguasai konsep full-stack development mulai dari frontend hingga backend deployment.',
  },
  {
    title: 'Belajar Membuat Aplikasi Back-End',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    icon: '💻',
    color: '#06b6d4',
    description: 'Sertifikasi pengembangan backend dengan Node.js dan pembuatan RESTful API.',
  },
  {
    title: 'Belajar Dasar-Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    icon: '🤖',
    color: '#8b5cf6',
    description: 'Pemahaman konsep dasar Artificial Intelligence dan Machine Learning.',
  },
  {
    title: 'Program Bangkit Academy',
    issuer: 'Kampus Merdeka',
    date: '2023',
    icon: '🎯',
    color: '#10b981',
    description: 'Program akselerasi talenta digital Indonesia oleh Google, GoTo, dan Traveloka.',
  },
]
</script>
