import SpotlightCard from './reactbits/SpotlightCard'
import { useSiteTheme } from './useSiteTheme'

type Strength = { title: string; body: string }

// One colour per discipline, matching the three bars of the personal mark
const COLORS = {
  light: ['#2f5bea', '#2e8b63', '#c98a00'],
  dark: ['#7593f8', '#4db585', '#f0b83a'],
}

export default function StrengthCards({ items }: { items: Strength[] }) {
  const theme = useSiteTheme()

  return (
    <div className="strengths__grid">
      {items.map((item, i) => (
        <SpotlightCard
          key={item.title}
          className={`strength strength--${i}`}
          theme={theme}
          spotlightColor={COLORS[theme][i]}
          intensity={theme === 'dark' ? 0.16 : 0.5}
          borderGlow={0.9}
          spotlightSize={280}
          proximity={60}
          flare={false}
          style={
            {
              '--spotlight-card-surface': 'var(--surface)',
              '--spotlight-card-border': 'var(--hairline)',
              '--spotlight-card-shadow': 'var(--shadow-card)',
            } as React.CSSProperties
          }
        >
          <span className="strength__bar" aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </SpotlightCard>
      ))}
    </div>
  )
}
