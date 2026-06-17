<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <p class="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
        <h2 class="section-title gradient-text">About Me</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mx-auto" />
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Info Cards -->
        <div class="space-y-6 animate-on-scroll">
          <div class="glass-card-hover p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white mb-1">Who I Am</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Fresh graduate S1 Teknik Informatika dari Universitas Esa Unggul dengan IPK <span class="text-primary-400 font-semibold">3.77/4.00</span>. 
                  Saya adalah seorang software developer yang passionate dalam membangun aplikasi web modern dan solusi berbasis data.
                </p>
              </div>
            </div>
          </div>

          <div class="glass-card-hover p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white mb-1">What I Do</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Fokus pada <span class="text-accent-purple font-semibold">Software Development</span> dan 
                  <span class="text-accent-cyan font-semibold">Data Processing</span>. 
                  Membangun aplikasi web full-stack menggunakan Vue.js, Laravel, dan berbagai teknologi modern.
                </p>
              </div>
            </div>
          </div>

          <div class="glass-card-hover p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white mb-1">Based in</h3>
                <p class="text-gray-400 text-sm leading-relaxed flex flex-col gap-1">
                  <span class="text-white font-semibold">Jakarta, Indonesia</span>
                  <span class="text-primary-400 font-bold">Open for Remote / On-site</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Stats & Summary -->
        <div class="space-y-6 animate-on-scroll" style="transition-delay: 0.2s">
          <div class="glass-card p-8">
            <h3 class="text-xl font-bold text-white mb-4">Professional Summary</h3>
            <p class="text-gray-400 leading-relaxed mb-4">
              Saya memiliki pengalaman dalam mengembangkan aplikasi web dari frontend hingga backend,
              dengan keahlian utama di Vue.js dan Laravel. Saya juga tertarik dengan bidang data processing
              dan analisis sentimen menggunakan machine learning.
            </p>
            <p class="text-gray-400 leading-relaxed">
              Selalu berupaya menulis kode yang bersih, skalabel, dan mudah di-maintain. 
              Berfokus pada user experience yang baik dan performa aplikasi yang optimal.
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="glass-card-hover p-4 text-center"
            >
              <div class="text-2xl font-black gradient-text mb-1">{{ stat.value }}</div>
              <div class="text-xs text-gray-500">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Tech Focus -->
          <div class="glass-card p-6">
            <h4 class="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Focus Areas</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="area in focusAreas"
                :key="area"
                class="tag-badge"
              >
                {{ area }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '3.77',   label: 'GPA' },
  { value: '6+',     label: 'Projects' },
  { value: '3+',     label: 'Certs' },
]

const focusAreas = [
  'Web Development',
  'Frontend Dev',
  'Backend Dev',
  'Vue.js',
  'Tailwind CSS',
  'UI/UX',
  'Laravel',  
  'PHP',
  'MySQL',
  'REST API',
  'Git / GitHub',
]
</script>
