export default function AppButton({ label, href, download }) {
  return (
    <a
      className="app-button"
      href={href}
      target={href?.startsWith('#') ? undefined : '_blank'}
      rel={href?.startsWith('#') ? undefined : 'noreferrer'}
      download={download}
    >
      <span className="label">{label}</span>
    </a>
  )
}
