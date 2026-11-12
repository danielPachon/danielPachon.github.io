import { useEffect, useState } from 'react'

export type SiteTheme = 'light' | 'dark'

/** Tracks the site's data-theme attribute so React islands follow the theme switch. */
export function useSiteTheme(): SiteTheme {
  const [theme, setTheme] = useState<SiteTheme>('light')

  useEffect(() => {
    const root = document.documentElement
    const read = () => setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light')
    read()
    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return theme
}
