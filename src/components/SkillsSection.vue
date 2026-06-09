<template>
  <section id="skills" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900 pointer-events-none" />
    <div class="absolute top-1/2 -left-48 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <p class="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
        <h2 class="section-title gradient-text">Tech Stack & Skills</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mx-auto mb-4" />
        <p class="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <!-- Skill Categories -->
      <div class="space-y-12">
        <div
          v-for="(category, catIndex) in skillCategories"
          :key="category.name"
          class="animate-on-scroll"
          :style="`transition-delay: ${catIndex * 0.1}s`"
        >
          <div class="flex items-center gap-3 mb-6">
            <div :class="`w-8 h-8 rounded-lg bg-${category.color}/20 flex items-center justify-center`">
              <span v-html="category.icon" :class="`text-${category.color}`" class="w-4 h-4" />
            </div>
            <h3 class="text-lg font-semibold text-gray-300">{{ category.name }}</h3>
            <div class="flex-1 h-px bg-white/5" />
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-badge group"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                :style="`background: ${skill.bg}`"
              >
                <img v-if="skill.img" :src="skill.img" :alt="skill.name" class="w-7 h-7 object-contain" />
                <span v-else>{{ skill.icon }}</span>
              </div>
              <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {{ skill.name }}
              </span>
              <!-- Skill level bar -->
              <div class="w-full bg-white/5 rounded-full h-1">
                <div
                  class="h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple transition-all duration-1000"
                  :style="`width: ${skill.level}%`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Frontend',
    color: 'accent-cyan',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/></svg>',
    skills: [
      { name: 'HTML',        icon: '🌐', bg: 'rgba(231,76,60,0.15)',   level: 90 },
      { name: 'CSS',         icon: '🎨', bg: 'rgba(52,152,219,0.15)',  level: 85 },
      { name: 'JavaScript',  icon: '⚡', bg: 'rgba(241,196,15,0.15)',  level: 80 },
      { name: 'Vue.js',      icon: '💚', bg: 'rgba(66,184,131,0.15)',  level: 82 },
      { name: 'Tailwind CSS',icon: '🌊', bg: 'rgba(6,182,212,0.15)',   level: 88 },
    ]
  },
  {
    name: 'Backend',
    color: 'accent-purple',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg>',
    skills: [
      { name: 'PHP',     icon: '🐘', bg: 'rgba(119,123,179,0.15)', level: 78 },
      { name: 'Laravel', icon: '🔴', bg: 'rgba(255,45,32,0.15)',   level: 80 },
      { name: 'MySQL',   icon: '🗄️', bg: 'rgba(0,117,143,0.15)',   level: 75 },
      { name: 'Firebase',icon: '🔥', bg: 'rgba(255,160,0,0.15)',   level: 70 },
    ]
  },
  {
    name: 'Tools & Others',
    color: 'primary-400',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    skills: [
      { name: 'Git',       icon: '🌿', bg: 'rgba(240,80,51,0.15)',  level: 82 },
      { name: 'GitHub',    icon: '🐙', bg: 'rgba(255,255,255,0.08)', level: 80 },
      { name: 'VS Code',   icon: '💙', bg: 'rgba(0,122,204,0.15)',  level: 88 },
      { name: 'Postman',   icon: '📮', bg: 'rgba(255,108,55,0.15)', level: 72 },
      { name: 'Figma',     icon: '🎭', bg: 'rgba(162,89,255,0.15)', level: 65 },
    ]
  },
]
</script>
