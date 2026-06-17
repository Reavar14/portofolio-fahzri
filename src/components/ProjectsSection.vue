<template>
  <section id="projects" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <p class="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">What I've built</p>
        <h2 class="section-title gradient-text">Featured Projects</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mx-auto mb-4" />
        <p class="section-subtitle">
          A selection of projects I've worked on — from web systems to data analysis
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="animate-on-scroll"
          :style="`transition-delay: ${index * 0.1}s`"
        >
          <div class="glass-card-hover p-0 overflow-hidden group h-full flex flex-col">
            <!-- Project Image / Banner -->
            <div
              class="relative h-48 flex items-center justify-center overflow-hidden"
              :style="`background: ${project.gradient}`"
            >
              <!-- 1. JIKA PROJECT.ICON ADALAH GAMBAR (Gambar Full Memenuhi Container) -->
              <img 
                v-if="project.icon.includes('.')" 
                :src="project.icon" 
                :alt="project.title" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <!-- Pattern overlay (Hanya muncul jika bukan gambar full agar tidak menutupi screenshot) -->
              <div v-else class="absolute inset-0 bg-grid opacity-20" />
              
              <!-- 2. JIKA PROJECT.ICON ADALAH EMOJI BIASA (Tampilan Kotak Kecil bawaan template) -->
              <div v-if="!project.icon.includes('.')" class="relative z-10 flex flex-col items-center gap-3">
                <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-4xl shadow-xl">
                  {{ project.icon }}
                </div>
                <span class="text-white/60 text-xs font-mono tracking-wider">{{ project.type }}</span>
              </div>

              <!-- Label Type Text di pojok bawah jika menggunakan gambar full -->
              <span v-if="project.icon.includes('.')" class="absolute bottom-3 left-3 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-mono tracking-wider uppercase">
                {{ project.type }}
              </span>

              <!-- Featured badge (Tetap di pojok kanan atas) -->
              <div v-if="project.featured" class="absolute top-3 right-3 z-10 px-2 py-1 rounded-full bg-primary-500/30 border border-primary-500/50 text-primary-300 text-xs font-medium backdrop-blur-sm">
                ✦ Featured
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tag-badge"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex items-center gap-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="group-hover/link:underline">Source Code</span>
                </a>
                <span v-if="project.github && project.demo" class="text-gray-700">|</span>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  <span class="group-hover/link:underline">Live Demo</span>
                </a>
                <span v-if="!project.github && !project.demo" class="text-gray-600 text-sm italic">
                  Private / Academic Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-12 animate-on-scroll">
        <a
          href="https://github.com/Reavar14"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View More on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Sistem Booking Servis Anugrah Manual Tech',
    type: 'Web Application',
    icon: '/bengkel.png',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(249,115,22,0.3) 100%)', // Warna gradasi merah-oranye khas bengkel/otomotif
    description:
      'Sistem layanan booking online berbasis web untuk Bengkel Anugrah Manual Tech guna mengatasi antrean fisik. Dilengkapi sistem manajemen antrean real-time, dashboard admin, serta sistem penjadwalan mekanik.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS',], // Sesuaikan dengan stack yang Anda pakai
    github: 'https://github.com/fahzriahmad/Bengkel_amtech', // Sesuaikan dengan link repo Anda jika berbeda
    demo: 'https://bengkelamtech.up.railway.app',
  },
  {
    title: 'Sistem Catatan Keuangan',
    type: 'Web Application',
    icon: '/catatan-keuangan.png',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(99,102,241,0.3) 100%)',
    description:
      'Aplikasi manajemen finansial berbasis web yang mengimplementasikan fitur autentikasi aman dengan Laravel Sanctum, integrasi API, dan manajemen database relasional. Menggunakan Tailwind CSS untuk menciptakan antarmuka yang bersih dan user-friendly, serta mendukung efisiensi pelacakan transaksi harian pengguna.',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Tailwind CSS','Git'],
    github: 'https://github.com/Reavar14/catatan-keuangan',
    demo: 'https://production-catatan-keuangan.up.railway.app/login',
  },
  {
    title: 'BBSP KEBTKE Website',
    type: 'Internship Project',
    icon: '/bbsp.png',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.3) 0%, rgba(139,92,246,0.3) 100%)',
    description:
      'Proyek redesign antarmuka website resmi BBSP KEBTKE untuk meningkatkan pengalaman pengguna dan aksesibilitas informasi. Bertanggung jawab penuh dalam mengimplementasikan desain modern dan responsif menggunakan HTML, CSS, dan JavaScript, serta melakukan optimasi performa agar website berjalan optimal di berbagai perangkat dan peramban.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Bootstrap'],
    github: 'https://github.com/Reavar14/Final_project',
    demo: 'https://bbspkebtke.vercel.app/',
  },
]
</script>
