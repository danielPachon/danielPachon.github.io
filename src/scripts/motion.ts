import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const EASE_OUT = 'power4.out'
const HEADER_OFFSET = -72
const INTRO_KEY = 'dp.intro-seen'

const root = document.documentElement
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Smooth scrolling, kept in lockstep with ScrollTrigger. Off for reduced motion. */
function setupSmoothScroll() {
  if (reduceMotion) return
  const lenis = new Lenis({ anchors: { offset: HEADER_OFFSET }, lerp: 0.12 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

/** One orchestrated entrance, played once per browser session. */
function playIntro() {
  if (!root.classList.contains('intro-pending')) return
  try {
    sessionStorage.setItem(INTRO_KEY, '1')
  } catch {
    /* storage unavailable: the intro simply plays again next time */
  }

  document.fonts.ready.then(() => {
    const title = document.querySelector<HTMLElement>('.hero h1')
    const split = title ? new SplitText(title, { type: 'lines', mask: 'lines' }) : null
    root.classList.remove('intro-pending')

    const tl = gsap.timeline({ defaults: { ease: EASE_OUT } })
    tl.from('.hero__frame', { clipPath: 'inset(100% 0% 0% 0% round 24px)', duration: 1.1 }, 0)
      .from('.hero__photo img', { scale: 1.15, duration: 1.4 }, 0)
      .from('.hero__mark', { scale: 0.9, opacity: 0, duration: 0.5 }, 0.5)
      .from('.hero__mark i', { scaleY: 0, transformOrigin: 'bottom', duration: 0.7, stagger: 0.1 }, 0.6)
      .from(['.hero__name', '.hero__role'], { y: 14, opacity: 0, duration: 0.6, stagger: 0.06 }, 0.1)

    if (split) {
      tl.from(split.lines, { yPercent: 105, duration: 0.9, stagger: 0.09, onComplete: () => split.revert() }, 0.2)
    }

    tl.from(['.hero__intro', '.hero__actions', '.hero__facts'], { y: 14, opacity: 0, duration: 0.6, stagger: 0.07 }, 0.65)
  })
}

/**
 * The project screenshot follows the scroll 1:1: as the reader moves through the highlights,
 * the board switches from one language and theme to the other, showing both features.
 */
function setupShowcase() {
  const showcase = document.querySelector<HTMLElement>('.showcase')
  if (!showcase || reduceMotion) return

  const mm = gsap.matchMedia()
  mm.add('(min-width: 961px)', () => {
    showcase.classList.add('showcase--animated')
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.project__layout',
          start: 'top 25%',
          end: 'bottom 70%',
          scrub: 0.6,
        },
      })
      .to('.showcase__shot--second', { opacity: 1, ease: 'none' }, 0.35)
      .to('.showcase__label--first', { opacity: 0, y: -6, ease: 'none' }, 0.35)
      .fromTo('.showcase__label--second', { opacity: 0, y: 6 }, { opacity: 1, y: 0, ease: 'none' }, 0.4)
      .fromTo('.showcase__progress', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0)

    return () => showcase.classList.remove('showcase--animated')
  })
}

/** The experience rail draws itself with the scroll, and each role lights up as it is reached. */
function setupTimeline() {
  if (reduceMotion) return
  document.querySelectorAll<HTMLElement>('.timeline').forEach((timeline) => {
    timeline.classList.add('timeline--animated')
    gsap.fromTo(
      timeline.querySelector('.timeline__progress'),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: timeline, start: 'top 65%', end: 'bottom 65%', scrub: 0.4 },
      },
    )
    timeline.querySelectorAll('.timeline__item').forEach((item) => {
      ScrollTrigger.create({ trigger: item, start: 'top 65%', toggleClass: 'is-reached' })
    })
  })
}

/** Gives the sticky header a shadow once the page has scrolled. */
function setupHeader() {
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
setupShowcase()
setupTimeline()
window.addEventListener('load', () => ScrollTrigger.refresh())
