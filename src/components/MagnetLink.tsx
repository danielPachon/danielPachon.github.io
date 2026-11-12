import Magnet from './reactbits/Magnet'

type Props = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  download?: boolean
}

/** A call-to-action that leans toward the pointer (fine pointers only; off for reduced motion). */
export default function MagnetLink({ href, children, variant = 'primary', download }: Props) {
  return (
    <Magnet padding={40} magnetStrength={5} maxOffset={8} wrapperClassName="magnet">
      <a className={`button button--${variant}`} href={href} download={download || undefined}>
        {children}
      </a>
    </Magnet>
  )
}
