import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE_OUT = 'expo.out'
const HEADER_OFFSET = -80
const INTRO_KEY = 'dp.intro-seen'

const root = document.documentElement
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Smooth scrolling, kept in lockstep with ScrollTrigger. Off for reduced motion. */
const setupSmoothScroll = () => {
  if (reduceMotion) return
  const lenis = new Lenis({ anchors: { offset: HEADER_OFFSET }, lerp: 0.12 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

/**
 * The one authored moment, played once per browser session: the three lines run in from the
 * left, bend into a bundle, meet at the portrait interchange and continue to the terminus.
 */
const playIntro = () => {
  if (!root.classList.contains('intro-pending')) return
  try {
    sessionStorage.setItem(INTRO_KEY, '1')
  } catch {
    /* storage unavailable: the intro simply plays again next time */
  }

  document.fonts.ready.then(() => {
    const name = document.querySelector<HTMLElement>('.hero__name')
    const split = name ? new SplitText(name, { type: 'chars', mask: 'chars' }) : null
    const stacked = window.matchMedia('(max-width: 820px)').matches

    const tl = gsap.timeline({ defaults: { ease: EASE_OUT } })
    tl.from('.route', { scaleX: 0, duration: 0.9, stagger: 0.08 }, 0)
      .from('.route__badge', { opacity: 0, x: -8, duration: 0.4, stagger: 0.08 }, 0.35)
      .fromTo('.bend__path', { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.35, ease: 'power2.out', stagger: 0.04 }, 0.62)
      .from('.station', { scale: 0.6, duration: 0.8 }, 0.72)
      .from('.station', { opacity: 0, duration: 0.18, ease: 'power1.out' }, 0.72)
      .from('.station__photo', { scale: 1.25, duration: 1.1 }, 0.78)
      .from('.bundle--hero', { scaleX: 0, duration: 0.9 }, 0.9)
      .from('.terminus', { opacity: 0, x: -10, duration: 0.5 }, stacked ? 1.5 : 1.3)
      .from('.hero__meta > *', { opacity: 0, y: 12, duration: 0.6, stagger: 0.06 }, stacked ? 1.25 : 1.15)

    if (split) {
      tl.from(split.chars, { yPercent: 110, duration: 0.8, stagger: 0.025, onComplete: () => split.revert() }, 1)
    }

    root.classList.remove('intro-pending')
  })
}

/** Each strip map fills with the scroll, and its stops light up as the line reaches them. */
const setupStrips = () => {
  if (reduceMotion) return
  document.querySelectorAll<HTMLElement>('.route-map .strip').forEach((strip) => {
    strip.classList.add('strip--animated')
    gsap.fromTo(
      strip.querySelector('.strip__progress'),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: strip, start: 'top 72%', end: 'bottom 62%', scrub: 0.4 },
      },
    )
    strip.querySelectorAll('.stop').forEach((stop) => {
      ScrollTrigger.create({ trigger: stop, start: 'top 68%', toggleClass: 'is-reached' })
    })
  })
}

/** The contact bundle runs into its terminus when it comes into view. */
const setupTerminus = () => {
  if (reduceMotion) return
  gsap.from('.contact__track .bundle', {
    scaleX: 0,
    duration: 1,
    ease: EASE_OUT,
    scrollTrigger: { trigger: '.contact', start: 'top 80%', toggleActions: 'play none none none' },
  })
}

/** Gives the sticky header a shadow once the page has scrolled. */
const setupHeader = () => {
  const header = document.querySelector('.site-header')
  if (!header) return
  ScrollTrigger.create({
    start: 8,
    end: 'max',
    onToggle: (self) => header.classList.toggle('is-scrolled', self.isActive),
  })
}

setupSmoothScroll()
setupHeader()
playIntro()
setupStrips()
setupTerminus()
window.addEventListener('load', () => ScrollTrigger.refresh())
