import { useEffect, useState } from 'react'

const lines = [
  { n: 24, parts: [{ cls: 'kw', text: '@RestController' }] },
  {
    n: 25,
    parts: [
      { cls: 'kw', text: '@RequestMapping' },
      { text: '(' },
      { cls: 'str', text: '"/api/v1/coding/patients"' },
      { text: ')' },
    ],
  },
  {
    n: 26,
    parts: [
      { cls: 'kw', text: 'public class ' },
      { cls: 'type', text: 'CodingTaskController' },
      { text: ' {' },
    ],
  },
  { n: 27, parts: [] },
  {
    n: 28,
    parts: [
      { cls: 'kw', text: '  @PostMapping' },
      { text: '(' },
      { cls: 'str', text: '"/{id}/allocate"' },
      { text: ')' },
    ],
  },
  {
    n: 29,
    parts: [
      { text: '  ' },
      { cls: 'type', text: 'public ResponseEntity' },
      { text: '<' },
      { cls: 'type', text: 'CodingTask' },
      { text: '> assign(' },
    ],
  },
  {
    n: 30,
    parts: [
      { text: '      ' },
      { cls: 'kw', text: '@PathVariable' },
      { text: ' ' },
      { cls: 'type', text: 'String' },
      { text: ' id) {' },
    ],
  },
  {
    n: 31,
    parts: [
      { text: '    ' },
      { cls: 'type', text: 'String' },
      { text: ' tenant = ' },
      { cls: 'type', text: 'TenantContext' },
      { text: '.get();' },
    ],
  },
  {
    n: 32,
    parts: [
      { text: '    ' },
      { cls: 'kw', text: 'return' },
      { text: ' ResponseEntity.ok(workflow.allocateToCoder(id, tenant));' },
    ],
  },
  { n: 33, parts: [{ text: '  }' }] },
  { n: 34, parts: [{ text: '}' }] },
]

const logs = [
  { cls: 'cmd', text: '$ mvn spring-boot:run -pl coding-service' },
  { cls: 'info', text: '[INFO] Building coding-service 1.4.2' },
  {
    cls: 'ok',
    text: 'Started CodingApplication in 2.1 seconds (JVM running for 2.8)',
  },
  { cls: 'ok', text: 'Tomcat started on port 8080 (http) — tenant filter ready' },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function HeroVisual() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showExtras, setShowExtras] = useState(false)
  const [visibleLogs, setVisibleLogs] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisibleLines(lines.length)
      setShowExtras(true)
      setVisibleLogs(logs.length)
      return
    }

    if (visibleLines < lines.length) {
      const delay = visibleLines === 0 ? 280 : 160
      const timer = setTimeout(() => setVisibleLines((n) => n + 1), delay)
      return () => clearTimeout(timer)
    }

    const extras = setTimeout(() => setShowExtras(true), 220)
    return () => clearTimeout(extras)
  }, [visibleLines])

  useEffect(() => {
    if (!showExtras || visibleLogs >= logs.length || prefersReducedMotion()) {
      return
    }
    const timer = setTimeout(() => setVisibleLogs((n) => n + 1), 260)
    return () => clearTimeout(timer)
  }, [showExtras, visibleLogs])

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-orb" />
      <div className="hero-grid" />

      <div className="hero-stage">
        <div className="hero-layers">
          <div className={`api-card${showExtras ? ' is-on' : ''}`}>
            <div className="api-bar">
              <span className="api-method">200</span>
              <span>POST /api/v1/coding/patients/4821/allocate</span>
            </div>
            <pre>
              {`{
  "taskId": "COD-1842",
  "tenantId": "apollo-health",
  "assignee": "CODER",
  "status": "ALLOCATED"
}`}
            </pre>
          </div>

          <div className="code-window">
            <div className="code-bar">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="file-name">CodingTaskController.java</span>
            </div>
            <pre className="code-body">
              {lines.map((line, index) => {
                const shown = index < visibleLines
                const active = index === visibleLines - 1
                return (
                  <div
                    className={`code-line${shown ? ' is-shown' : ''}`}
                    key={line.n}
                  >
                    <span className="line-no">{line.n}</span>
                    <span className="line-text">
                      {shown &&
                        (line.parts.length === 0
                          ? '\u00a0'
                          : line.parts.map((part, i) =>
                              part.cls ? (
                                <span className={part.cls} key={`${line.n}-${i}`}>
                                  {part.text}
                                </span>
                              ) : (
                                <span key={`${line.n}-${i}`}>{part.text}</span>
                              ),
                            ))}
                      {active && <span className="caret" />}
                    </span>
                  </div>
                )
              })}
            </pre>
          </div>
        </div>

        <div className={`console-strip${showExtras ? ' is-on' : ''}`}>
          <div className="console-bar">
            <i className="fa-solid fa-terminal" />
            coding-service — spring-boot
          </div>
          <div className="console-body">
            {logs.map((log, index) => (
              <p
                className={`console-line ${log.cls}${index < visibleLogs ? ' is-shown' : ''}`}
                key={log.text}
              >
                {log.text}
              </p>
            ))}
          </div>
        </div>

        <div className={`chip-row${showExtras ? ' is-on' : ''}`}>
          <div className="float-chip">
            <i className="fa-solid fa-cubes" />
            Microservices
          </div>
          <div className="float-chip">
            <i className="fa-solid fa-cloud" />
            Azure / GCP
          </div>
          <div className="float-chip">
            <i className="fa-solid fa-database" />
            MongoDB
          </div>
        </div>
      </div>
    </div>
  )
}
