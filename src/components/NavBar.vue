<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-dark-800/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#home" @click.prevent="scrollTo('home')" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center font-black text-white text-lg shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/60 transition-all duration-300">
            F
          </div>
          <span class="font-bold text-white text-lg tracking-tight">
            Faizul Ahmad Fahzri<span class="text-primary-400">.</span>
          </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id)"
            :class="[
              'nav-link relative py-1 group',
              activeSection === item.id ? 'text-primary-400' : ''
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-purple transition-all duration-300',
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            />
          </a>

          <a
            href="/public/CV-Faizul-Ahmad.pdf"
            download
            class="btn-primary text-sm px-4 py-2"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
              CV
            </span>
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']" />
          <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
          <span :class="['block w-6 h-0.5 bg-white transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="menuOpen"
        class="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/10"
      >
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id); menuOpen = false"
            :class="[
              'px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium',
              activeSection === item.id ? 'text-primary-400 bg-primary-500/10' : ''
            ]"
          >
            {{ item.label }}
          </a>
          <a
            href="/CV-Faizul-Ahmad.pdf"
            download
            class="btn-primary text-center mt-2"
            @click="menuOpen = false"
          >
            Download CV
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home',        label: 'Home' },
  { id: 'about',       label: 'About' },
  { id: 'skills',      label: 'Skills' },
  { id: 'projects',    label: 'Projects' },
  { id: 'experience',  label: 'Experience' },
  { id: 'contact',     label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  // Detect active section
  for (let i = navItems.length - 1; i >= 0; i--) {
    const el = document.getElementById(navItems[i].id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100) {
        activeSection.value = navItems[i].id
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
