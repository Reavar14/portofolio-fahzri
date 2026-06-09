<template>
  <div class="min-h-screen bg-dark-900">
    <!-- Background gradient -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-radial from-primary-900/20 via-dark-900 to-dark-900" />
    </div>

    <NavBar />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <FooterSection />

    <!-- Back to top button -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple shadow-lg shadow-primary-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
        aria-label="Back to top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'

const showBackToTop = ref(false)
useScrollAnimation()

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
