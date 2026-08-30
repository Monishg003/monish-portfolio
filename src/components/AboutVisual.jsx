const nodes = [
  { icon: 'fa-brands fa-java', label: 'Java' },
  { icon: 'fa-solid fa-leaf', label: 'Spring' },
  { icon: 'fa-solid fa-shield-halved', label: 'Security' },
  { icon: 'fa-solid fa-server', label: 'APIs' },
  { icon: 'fa-solid fa-cloud', label: 'Cloud' },
  { icon: 'fa-solid fa-database', label: 'Data' },
]

export default function AboutVisual() {
  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-ring" />
      <div className="about-core">
        <i className="fa-solid fa-gears" />
        <strong>Backend</strong>
        <span>Systems</span>
      </div>
      <ul className="about-nodes">
        {nodes.map((node) => (
          <li key={node.label}>
            <i className={node.icon} />
            {node.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
